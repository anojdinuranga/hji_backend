import bcrypt from "bcrypt";
import config from './../config/config';
import jwt from 'jsonwebtoken';
import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';

// Define the structure of the enquiry output
interface EnquiryOutput {
    enquiry: {
        id: number;
        client: string;
        client_name: string;
        type: number;
        file: string;
        development_type: string;
        order_type: string;
        sample_type: string;
        enq_number: string;
        gsr_number: string;
    };
    valueAdded: string[]; // Array of value added strings
    trims: {
        type: string;
        description: string;
        content: string;
        placement: string;
    };
    specSheets: {
        pointOfMeasure: string;
        code: string;
        howToMeasure: string;
        critical: string;
        type: string;
        tolerance: string;
        sizes: {
            s: number;
            m: number;
            l: number;
            xl: number;
        };
    };
    mainFabric: {
        knitStructure: string;
        blend: string;
        gsm: number;
        finish: string;
        dryMethod: string;
        placement: string;
    };
    combos: {
        comboNo: string;
        size: string;
        pieces: number;
    };
    accessoryFabric: {
        knitStructure: string;
        blend: string;
        gsm: number;
        placement: string;
    };
}

// Define the structure of the DefaultResponse
interface DefaultResponse<T> {
    status: string;
    message: string;
    data?: T;
}



const enquiry_add = async (client: number, type: number, file: string|null, developmentType: number|null, orderType: number|null, sampleType: number|null,file2: string|null, authUserId: number) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");

        let result = await db.query(`
            INSERT INTO 
                enquiry (client, type, file,file_2, development_type, order_type, sample_type, status, added_by, added_time) 
            VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
            client, type, file,file2, developmentType, orderType, sampleType, 1, authUserId, currentDateTime
        ]);

        if (result.status) {
            return DefaultResponse.successFormat("200", {
                enquiryId: result.data.insertId
            });
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const enquiry_list = async (type: number,status:number,authUserId:number) =>{

    try {

        let result = await db.query(`
            SELECT 
                enquiry.*, 
                client.name AS client_name 
            FROM enquiry 
            INNER JOIN client ON enquiry.client = client.id 
            WHERE enquiry.type = ? AND enquiry.status = ? AND enquiry.added_by = ?
        `, [type, status, authUserId]);
        

        if (result.status) {
            return DefaultResponse.successFormat("200", result.data);
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const enquiry_view = async (enquiryId: number): Promise<DefaultResponse<any>> => {
    try {
        // Fetch enquiry details along with all related data using LEFT JOINs
        let result = await db.query(`
            SELECT 
                enquiry.id, 
                enquiry.client, 
                client.name AS client_name, 
                enquiry.type, 
                enquiry.file, 
                enquiry.development_type, 
                enquiry.order_type, 
                enquiry.sample_type,
                enquiry.enq_number,
                enquiry.gsr_number,
                GROUP_CONCAT(DISTINCT eav.values) AS value_added, -- Enquiry value added details combined
                et.type AS trim_type, 
                et.description AS trim_description, 
                et.content AS trim_content, 
                et.placement AS trim_placement, -- Trims details
                ess.point_of_measure, 
                ess.code, 
                ess.how_to_measure, 
                ess.critical, 
                ess.type AS spec_type, 
                ess.tolerance, 
                ess.s, 
                ess.m, 
                ess.l, 
                ess.xl, -- Spec sheet details
                emf.knit_structure, 
                emf.blend, 
                emf.gsm, 
                emf.finish, 
                emf.dry_method, 
                emf.placement AS fabric_placement, -- Main fabric details
                ec.combo_no, 
                ec.size, 
                ec.pieces, -- Combo details
                eaf.knit_structure AS accessory_knit_structure, 
                eaf.blend AS accessory_blend, 
                eaf.gsm AS accessory_gsm, 
                eaf.placement AS accessory_placement -- Accessory fabric details
            FROM enquiry
            LEFT JOIN client ON enquiry.client = client.id  
            LEFT JOIN enquiry_value_added eav ON enquiry.id = eav.enquiry_id
            LEFT JOIN enquiry_trims et ON enquiry.id = et.enquiry_id
            LEFT JOIN enquiry_spec_sheet ess ON enquiry.id = ess.enquiry_id
            LEFT JOIN enquiry_main_fabric emf ON enquiry.id = emf.enquiry_id
            LEFT JOIN enquiry_combo ec ON enquiry.id = ec.enquiry_id
            LEFT JOIN enquiry_accessory_fabric eaf ON enquiry.id = eaf.enquiry_id
            WHERE enquiry.id = ?
            GROUP BY enquiry.id
        `, [enquiryId]);

        if (result.status) {
            if (result.data.length === 0) {
                return { status: "404", message: "Not Found" };
            }

            // Extract the first result for the enquiry details
            const enquiryDetails = result.data[0];

            // Prepare the output structure
            let output: any = {
                id: enquiryId,
                client: enquiryDetails.client,
                client_name: enquiryDetails.client_name,
                type: enquiryDetails.type,
                file: enquiryDetails.file,
                development_type: enquiryDetails.development_type,
                order_type: enquiryDetails.order_type,
                sample_type: enquiryDetails.sample_type,
                enq_number: enquiryDetails.enq_number,
                gsr_number: enquiryDetails.gsr_number,
                valueAdded: enquiryDetails.value_added ? enquiryDetails.value_added.split(',').map((value: string) => value.trim()) : [],
                trims: [],
                specSheets: [],
                mainFabric: [],
                combos: [],
                accessoryFabric: []
            };

            // Collect trims
            if (enquiryDetails.trim_type || enquiryDetails.trim_description || enquiryDetails.trim_content || enquiryDetails.trim_placement) {
                output.trims.push({
                    type: enquiryDetails.trim_type,
                    description: enquiryDetails.trim_description,
                    content: enquiryDetails.trim_content,
                    placement: enquiryDetails.trim_placement
                });
            }

            // Collect spec sheets
            if (enquiryDetails.point_of_measure || enquiryDetails.code || enquiryDetails.how_to_measure || enquiryDetails.critical || enquiryDetails.spec_type) {
                output.specSheets.push({
                    pointOfMeasure: enquiryDetails.point_of_measure,
                    code: enquiryDetails.code,
                    howToMeasure: enquiryDetails.how_to_measure,
                    critical: enquiryDetails.critical,
                    type: enquiryDetails.spec_type,
                    tolerance: enquiryDetails.tolerance,
                    sizes: {
                        s: enquiryDetails.s,
                        m: enquiryDetails.m,
                        l: enquiryDetails.l,
                        xl: enquiryDetails.xl
                    }
                });
            }

            // Collect main fabric
            if (enquiryDetails.knit_structure || enquiryDetails.blend || enquiryDetails.gsm || enquiryDetails.finish || enquiryDetails.dry_method || enquiryDetails.fabric_placement) {
                output.mainFabric.push({
                    knitStructure: enquiryDetails.knit_structure,
                    blend: enquiryDetails.blend,
                    gsm: enquiryDetails.gsm,
                    finish: enquiryDetails.finish,
                    dryMethod: enquiryDetails.dry_method,
                    placement: enquiryDetails.fabric_placement
                });
            }

            // Collect combos
            if (enquiryDetails.combo_no || enquiryDetails.size || enquiryDetails.pieces) {
                output.combos.push({
                    comboNo: enquiryDetails.combo_no,
                    size: enquiryDetails.size,
                    pieces: enquiryDetails.pieces
                });
            }

            // Collect accessory fabric
            if (enquiryDetails.accessory_knit_structure || enquiryDetails.accessory_blend || enquiryDetails.accessory_gsm || enquiryDetails.accessory_placement) {
                output.accessoryFabric.push({
                    knitStructure: enquiryDetails.accessory_knit_structure,
                    blend: enquiryDetails.accessory_blend,
                    gsm: enquiryDetails.accessory_gsm,
                    placement: enquiryDetails.accessory_placement
                });
            }

            return { status: "200", message: "Success", data: output };
        }

        return { status: "500", message: "Internal Server Error" };

    } catch (err) {
        logger.error(err);
        return { status: "500", message: "Internal Server Error" };
    }
};





const enquiry_edit = async (enquiryId: number, client: number|null, type: number|null, file: string|null, developmentType: number|null, orderType: number|null, sampleType: number|null,file2: string|null, authUserId: number) => {

    try {
        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");

        let result = await db.query('UPDATE enquiry SET client = ?, type = ?, file = ?,file_2 = ?, development_type = ?, order_type = ?, sample_type = ?, updated_by = ?, updated_time = ? WHERE id = ?', [
            client, type, file,file2, developmentType, orderType, sampleType, authUserId, currentDateTime, enquiryId
        ]);

        if (result.status) {
            return DefaultResponse.successFormat("200");
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const enquiry_data_edit = async () => {

    try {
        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
        console.log(currentDateTime);
        let result = await db.query(`
            UPDATE enquiry 
            SET enq_number = CONCAT('ENQ-', LPAD(id, 5, '0')),
                gsr_number = CONCAT('FT-', LPAD(id, 5, '0'))
        `, []);

        if (result.status) {
            return DefaultResponse.successFormat("200");
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const enquiry_delete = async (enquiryId: number) =>{

    try {

        let result = await db.query('DELETE FROM enquiry WHERE id = ?', [enquiryId]);

        if (result.status) {
            return DefaultResponse.successFormat("200");
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

export default {
    enquiry_add,
    enquiry_edit,
    enquiry_view,
    enquiry_list,
    enquiry_delete,
    enquiry_data_edit
}



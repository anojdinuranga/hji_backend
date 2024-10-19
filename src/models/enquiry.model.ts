import bcrypt from "bcrypt";
import config from './../config/config';
import jwt from 'jsonwebtoken';
import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';

interface EnquiryDetails {
    id: number;
    client: number;
    client_name: string;
    type: number;
    file: string;
    development_type: string;
    order_type: string;
    sample_type: string;
    enq_number: string;
    gsr_number: string;
    value_added: string | null;
    trim_type: number | null;
    trim_description: string | null;
    trim_content: string | null;
    trim_placement: string | null;
    point_of_measure: string | null;
    code: string | null;
    how_to_measure: string | null;
    critical: number | null;
    spec_type: number | null;
    tolerance: number | null;
    s: number | null;
    m: number | null;
    l: number | null;
    xl: number | null;
    knit_structure: string | null;
    blend: string | null;
    gsm: number | null;
    finish: string | null;
    dry_method: string | null;
    fabric_placement: string | null;
    combo_no: string | null;
    size: string | null;
    pieces: number | null;
    accessory_knit_structure: string | null;
    accessory_blend: string | null;
    accessory_gsm: number | null;
    accessory_placement: string | null;
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

            // Prepare the output structure
            let output: any = {
                id: enquiryId,
                client: result.data[0].client,
                client_name: result.data[0].client_name,
                type: result.data[0].type,
                file: result.data[0].file,
                development_type: result.data[0].development_type,
                order_type: result.data[0].order_type,
                sample_type: result.data[0].sample_type,
                enq_number: result.data[0].enq_number,
                gsr_number: result.data[0].gsr_number,
                valueAdded: result.data[0].value_added ? result.data[0].value_added.split(',').map((value: string) => value.trim()) : [],
                trims: [],
                specSheets: [],
                mainFabric: [],
                combos: [],
                accessoryFabric: []
            };

            // Collect all unique trims and other related details
            result.data.forEach((enquiryDetails: EnquiryDetails) => {
                // Collect trims
                if (enquiryDetails.trim_type) {
                    output.trims.push({
                        type: enquiryDetails.trim_type,
                        description: enquiryDetails.trim_description,
                        content: enquiryDetails.trim_content,
                        placement: enquiryDetails.trim_placement
                    });
                }

                // Collect spec sheets
                if (enquiryDetails.point_of_measure) {
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
                if (enquiryDetails.knit_structure) {
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
                if (enquiryDetails.combo_no) {
                    output.combos.push({
                        comboNo: enquiryDetails.combo_no,
                        size: enquiryDetails.size,
                        pieces: enquiryDetails.pieces
                    });
                }

                // Collect accessory fabric
                if (enquiryDetails.accessory_knit_structure) {
                    output.accessoryFabric.push({
                        knitStructure: enquiryDetails.accessory_knit_structure,
                        blend: enquiryDetails.accessory_blend,
                        gsm: enquiryDetails.accessory_gsm,
                        placement: enquiryDetails.accessory_placement
                    });
                }
            });

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

const enquiry_validation = async ( id: number ) => {

    try {

        let result = await db.query(`SELECT enquiry.file
        FROM enquiry
        WHERE enquiry.id = ? `, [ id]);
        if (!result.status) {
            return result;
        }
        if(result.data.length === 0) {
            return DefaultResponse.errorFormat('404');
        }
        return DefaultResponse.successFormat('200', result.data[0]);

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat('500');
    }
    
};

const enquiry_file_update = async (file: string, resultId: number, authUserId: number, authUserRole: number)=> {
    try {
        let result;
        result  = await db.query('UPDATE enquiry SET file = ? WHERE id = ?', [file, resultId]);
        if ( !result.status ) {
            logger.error(result);
            return DefaultResponse.errorFormat('500');
        }
        return DefaultResponse.successFormat('200');
    } catch(err) {
        logger.error(err);
        return DefaultResponse.errorFormat('500');
    }
}

const enquiry_file_2_update = async (file: string, resultId: number, authUserId: number, authUserRole: number)=> {
    try {
        let result;
        result  = await db.query('UPDATE enquiry SET file_2 = ? WHERE id = ?', [file, resultId]);
        if ( !result.status ) {
            logger.error(result);
            return DefaultResponse.errorFormat('500');
        }
        return DefaultResponse.successFormat('200');
    } catch(err) {
        logger.error(err);
        return DefaultResponse.errorFormat('500');
    }
}

export default {
    enquiry_add,
    enquiry_edit,
    enquiry_view,
    enquiry_list,
    enquiry_delete,
    enquiry_data_edit,
    enquiry_validation,
    enquiry_file_update,
    enquiry_file_2_update
}
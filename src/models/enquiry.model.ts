import bcrypt from "bcrypt";
import config from './../config/config';
import jwt from 'jsonwebtoken';
import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';




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

const enquiry_list = async () =>{

    try {

        let result = await db.query(`
            SELECT 
                enquiry.id, 
                enquiry.client, 
                client.name AS client_name,  -- Joining client name
                enquiry.type, 
                enquiry.file, 
                enquiry.development_type, 
                enquiry.order_type, 
                enquiry.sample_type,
                enquiry.enq_number,
                enquiry.gsr_number,  
                enquiry.added_time
            FROM enquiry
            INNER JOIN client ON enquiry.client = client.id  -- Inner join to get client name
        `, []);

        if (result.status) {
            return DefaultResponse.successFormat("200", result.data);
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const enquiry_view = async (enquiryId: number) => {
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
                eav.values AS value_added, -- Enquiry value added details
                et.type AS trim_type, et.description AS trim_description, et.content AS trim_content, et.placement AS trim_placement, -- Trims details
                ess.point_of_measure, ess.code, ess.how_to_measure, ess.critical, ess.type AS spec_type, ess.tolerance, ess.s, ess.m, ess.l, ess.xl, -- Spec sheet details
                emf.knit_structure, emf.blend, emf.gsm, emf.finish, emf.dry_method, emf.placement AS fabric_placement, -- Main fabric details
                ec.combo_no, ec.size, ec.pieces, -- Combo details
                eaf.knit_structure AS accessory_knit_structure, eaf.blend AS accessory_blend, eaf.gsm AS accessory_gsm, eaf.placement AS accessory_placement -- Accessory fabric details
            FROM enquiry
            LEFT JOIN client ON enquiry.client = client.id  
            LEFT JOIN enquiry_value_added eav ON enquiry.id = eav.enquiry_id
            LEFT JOIN enquiry_trims et ON enquiry.id = et.enquiry_id
            LEFT JOIN enquiry_spec_sheet ess ON enquiry.id = ess.enquiry_id
            LEFT JOIN enquiry_main_fabric emf ON enquiry.id = emf.enquiry_id
            LEFT JOIN enquiry_combo ec ON enquiry.id = ec.enquiry_id
            LEFT JOIN enquiry_accessory_fabric eaf ON enquiry.id = eaf.enquiry_id
            WHERE enquiry.id = ?
        `, [enquiryId]);

        if (result.status) {
            if (result.data.length === 0) {
                return DefaultResponse.errorFormat("404");
            }

            // Extract the first result for the enquiry details
            const enquiryDetails = result.data[0];

            // Return the entire structure as is, including all related details
            const output = {
                enquiry: {
                    id: enquiryDetails.id,
                    client: enquiryDetails.client,
                    client_name: enquiryDetails.client_name,
                    type: enquiryDetails.type,
                    file: enquiryDetails.file,
                    development_type: enquiryDetails.development_type,
                    order_type: enquiryDetails.order_type,
                    sample_type: enquiryDetails.sample_type,
                    enq_number: enquiryDetails.enq_number,
                    gsr_number: enquiryDetails.gsr_number,
                },
                valueAdded: enquiryDetails.value_added ? enquiryDetails.value_added.split(',').map((value: string) => value.trim()) : [],  // Explicitly type 'value' as string
                trims: {
                    type: enquiryDetails.trim_type,
                    description: enquiryDetails.trim_description,
                    content: enquiryDetails.trim_content,
                    placement: enquiryDetails.trim_placement
                },
                specSheets: {
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
                },
                mainFabric: {
                    knitStructure: enquiryDetails.knit_structure,
                    blend: enquiryDetails.blend,
                    gsm: enquiryDetails.gsm,
                    finish: enquiryDetails.finish,
                    dryMethod: enquiryDetails.dry_method,
                    placement: enquiryDetails.fabric_placement
                },
                combos: {
                    comboNo: enquiryDetails.combo_no,
                    size: enquiryDetails.size,
                    pieces: enquiryDetails.pieces
                },
                accessoryFabric: {
                    knitStructure: enquiryDetails.accessory_knit_structure,
                    blend: enquiryDetails.accessory_blend,
                    gsm: enquiryDetails.accessory_gsm,
                    placement: enquiryDetails.accessory_placement
                }
            };

            return DefaultResponse.successFormat("200", output);
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
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



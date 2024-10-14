import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';

const enquiry_accessory_fabric_add = async (enquiryId: number, knitStructure: string|null, blend: string|null, gsm: number|null, placement: string|null) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");

        let result = await db.query(`
            INSERT INTO 
                enquiry_accessory_fabric (enquiry_id, knit_structure, blend, gsm, placement, added_time) 
            VALUES ( ?, ?, ?, ?, ?, ?)
        `, [
            enquiryId, knitStructure, blend, gsm, placement, currentDateTime
        ]);

        if (result.status) {
            return DefaultResponse.successFormat("200", {
                enquiryAccessoryFabricId: result.data.insertId
            });
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const enquiry_accessory_fabric_list = async () =>{

    try {

        let result = await db.query(`
            SELECT 
                *
            FROM enquiry_accessory_fabric
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

const enquiry_accessory_fabric_view = async (enquiryId: number) =>{

    try {

        let result = await db.query(`
            SELECT 
                enquiry_accessory_fabric.id, 
                enquiry_accessory_fabric.enquiry_id, 
                enquiry_accessory_fabric.knit_structure, 
                enquiry_accessory_fabric.blend, 
                enquiry_accessory_fabric.gsm, 
                enquiry_accessory_fabric.placement 
            FROM enquiry_accessory_fabric 
            WHERE enquiry_id = ?
        `, [enquiryId]);

        if (result.status) {
            if (result.data.length === 0) {
                return DefaultResponse.errorFormat("404");
            }
            return DefaultResponse.successFormat("200", result.data);
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const enquiry_accessory_fabric_edit = async (enquiryId: number, knitStructure: string|null, blend: string|null, gsm: number|null, placement: string|null) => {

    try {
        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");

        let result = await db.query('UPDATE enquiry_accessory_fabric SET knit_structure = ?, blend = ?, gsm = ?, placement = ?, updated_time = ? WHERE enquiry_id = ?', [
            knitStructure, blend, gsm, placement, currentDateTime, enquiryId
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

const enquiry_accessory_fabric_delete = async (enquiryId: number) =>{

    try {

        let result = await db.query('DELETE FROM enquiry_accessory_fabric WHERE enquiry_id = ?', [enquiryId]);

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
    enquiry_accessory_fabric_add,
    enquiry_accessory_fabric_edit,
    enquiry_accessory_fabric_view,
    enquiry_accessory_fabric_list,
    enquiry_accessory_fabric_delete
}


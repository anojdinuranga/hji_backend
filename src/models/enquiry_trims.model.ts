import bcrypt from "bcrypt";
import config from './../config/config';
import jwt from 'jsonwebtoken';
import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';



const enquiry_trim_add = async (enquiryId: number, type: number, description: string|null, content: string|null, placement: string|null, authUserId: number) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");

        let result = await db.query(`
            INSERT INTO 
                enquiry_trim (enquiry_id, type, description, content, placement, status, added_by, added_time) 
            VALUES ( ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
            enquiryId, type, description, content, placement, 1, authUserId, currentDateTime
        ]);

        if (result.status) {
            return DefaultResponse.successFormat("200", {
                enquiryTrimId: result.data.insertId
            });
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const enquiry_trim_list = async (enquiryId: number) =>{

    try {

        let result = await db.query(`
            SELECT 
                *
            FROM enquiry_trim
            WHERE enquiry_id = ?
        `, [enquiryId]);

        if (result.status) {
            return DefaultResponse.successFormat("200", result.data);
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const enquiry_trim_view = async (enquiryTrimId: number) =>{

    try {

        let result = await db.query(`
            SELECT 
                enquiry_trim.id, 
                enquiry_trim.enquiry_id, 
                enquiry_trim.type, 
                enquiry_trim.description, 
                enquiry_trim.content, 
                enquiry_trim.placement
            FROM enquiry_trim 
            WHERE id = ?
        `, [enquiryTrimId]);

        if (result.status) {
            if (result.data.length === 0) {
                return DefaultResponse.errorFormat("404");
            }
            return DefaultResponse.successFormat("200", result.data[0]);
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};
const enquiry_trim_edit = async (enquiryTrimId: number, enquiryId: number, type: number, description: string|null, content: string|null, placement: string|null, authUserId: number) => {

    try {
        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");

        let result = await db.query('UPDATE enquiry_trim SET enquiry_id = ?, type = ?, description = ?, content = ?, placement = ?, updated_by = ?, updated_time = ? WHERE id = ?', [
            enquiryId, type, description, content, placement, authUserId, currentDateTime, enquiryTrimId
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

const enquiry_trim_delete = async (enquiryTrimId: number) =>{

    try {

        let result = await db.query('DELETE FROM enquiry_trim WHERE id = ?', [enquiryTrimId]);

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
    enquiry_trim_add,
    enquiry_trim_list,
    enquiry_trim_view,
    enquiry_trim_edit,
    enquiry_trim_delete
}


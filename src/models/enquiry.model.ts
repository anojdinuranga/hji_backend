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
                enquiry.gsr_number  
            FROM enquiry
            INNER JOIN client ON enquiry.client = client.id  -- Inner join to get client name
            WHERE enquiry.id = ?
        `, [enquiryId]);
        

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



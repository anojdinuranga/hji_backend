import bcrypt from "bcrypt";
import config from './../config/config';
import jwt from 'jsonwebtoken';
import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';



const client_add = async (name: string, contactNumber: string, email: string|null, pocName: string, pocContactNumber: string, headOfficeAddress: string, logo: string|null, authUserId:number) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");

        let result = await db.query(`
            INSERT INTO 
                client (name, contact_number, email, poc_name, poc_contact_number, head_office_address, logo, status, added_by, added_time) 
            VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [name, contactNumber, email, pocName, pocContactNumber, headOfficeAddress, logo, 2, authUserId, currentDateTime]);

        if (result.status) {
            return DefaultResponse.successFormat("200", {
                clientId: result.data.insertId
            });
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const client_list = async () =>{

    try {

        let result = await db.query(`
            SELECT 
                client.id, 
                client.name, 
                client.contact_number, 
                client.email, 
                client.poc_name, 
                client.poc_contact_number, 
                client.head_office_address, 
                client.logo, 
                client.status,
                status.name AS status_name,
                client.updated_by,
                client.updated_time,
                client.added_by,
                client.added_time,
                user_add.name AS added_by_name,
                user_update.name AS updated_by_name
            FROM client
            LEFT JOIN user user_add ON client.added_by = user_add.id
            LEFT JOIN user user_update ON client.updated_by = user_update.id
            LEFT JOIN status ON client.status = status.id    
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

const client_view = async (clientId: number) =>{

    try {

        let result = await db.query(`
            SELECT 
                client.id, 
                client.name, 
                client.contact_number, 
                client.email, 
                client.poc_name, 
                client.poc_contact_number, 
                client.head_office_address, 
                client.logo, 
                client.status,
                status.name AS status_name,
                client.updated_by,
                client.updated_time,
                client.added_by,
                client.added_time,
                user_add.name AS added_by_name,
                user_update.name AS updated_by_name
            FROM client
            LEFT JOIN status ON client.status = status.id    
            LEFT JOIN user user_add ON client.added_by = user_add.id
            LEFT JOIN user user_update ON client.updated_by = user_update.id
            WHERE client.id = ?`, [clientId]);

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

const client_edit = async (clientId: number, name: string, contactNumber: string, email: string|null, pocName: string, pocContactNumber: string, headOfficeAddress: string, logo: string|null, authUserId:number) => {

    try {
        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");

        let result = await db.query('UPDATE client SET name = ?, contact_number = ?, email = IF(email = ?, email, ?), poc_name = ?, poc_contact_number = ?, head_office_address = ?, logo = ?, updated_by = ?, updated_time = ? WHERE id = ?', [name, contactNumber, email, email, pocName, pocContactNumber, headOfficeAddress, logo, authUserId, currentDateTime, clientId]);
        console.log("🚀 ~ constclient_edit= ~ result:", result)

        if (result.status) {
            return DefaultResponse.successFormat("200");
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const client_delete = async (clientId: number) =>{

    try {

        let result = await db.query('DELETE FROM client WHERE id = ?', [clientId]);

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
    client_add,
    client_edit,
    client_view,
    client_list,
    client_delete
}

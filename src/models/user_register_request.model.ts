import bcrypt from "bcrypt";
import config from './../config/config';
import jwt from 'jsonwebtoken';
import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';



const user_register_request_add = async (name: string, employeeNumber: string, authUserId:number) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");

        let result = await db.query(`
            INSERT INTO 
                user_register_request (name, employee_number, status, added_by, added_time) 
            VALUES ( ?, ?, ?, ?, ?)
        `, [name, employeeNumber, 1, authUserId, currentDateTime]);

        if (result.status) {
            return DefaultResponse.successFormat("200", {
                userRegisterRequestId: result.data.insertId
            });
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const user_register_request_list = async (authUserRole:number, authUserId:number) =>{

    try {
        let retAll = authUserRole == 1 ? 1 : 0;


        let result = await db.query(`
            SELECT 
                user_register_request.id, 
                user_register_request.name, 
                user_register_request.employee_number, 
                user_register_request.status,
                status.name AS status_name,
                user_register_request.updated_by,
                user_register_request.updated_time,
                user_register_request.added_by,
                user_register_request.added_time,
                user_add.name AS added_by_name,
                user_update.name AS updated_by_name
            FROM user_register_request
            LEFT JOIN user user_add ON user_register_request.added_by = user_add.id
            LEFT JOIN user user_update ON user_register_request.updated_by = user_update.id
            LEFT JOIN status ON user_register_request.status = status.id    
            WHERE user_register_request.added_by = ? OR ?
        `, [authUserId, retAll]);

        if (result.status) {
            return DefaultResponse.successFormat("200", result.data);
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const user_register_request_view = async (userRegisterRequestId: number) =>{

    try {

        let result = await db.query(`
            SELECT 
                user_register_request.id, 
                user_register_request.name, 
                user_register_request.employee_number, 
                user_register_request.status,
                status.name AS status_name,
                user_register_request.updated_by,
                user_register_request.updated_time,
                user_register_request.added_by,
                user_register_request.added_time,
                user_add.name AS added_by_name,
                user_update.name AS updated_by_name
            FROM user_register_request
            LEFT JOIN status ON user_register_request.status = status.id    
            LEFT JOIN user user_add ON user_register_request.added_by = user_add.id
            LEFT JOIN user user_update ON user_register_request.updated_by = user_update.id
            WHERE user_register_request.id = ?`, [userRegisterRequestId]);

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

const user_register_request_edit = async (userRegisterRequestId: number, name: string, employeeNumber: string, authUserId:number) => {

    try {
        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");

        let result = await db.query('UPDATE user_register_request SET name = ?, employee_number = ?, updated_by = ?, updated_time = ? WHERE id = ?', [name, employeeNumber, authUserId, currentDateTime, userRegisterRequestId]);

        if (result.status) {
            return DefaultResponse.successFormat("200");
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};
const user_register_request_edit_status = async (status:number, id:number, authUserId:number) => {

    try {
        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");

        let result = await db.query('UPDATE user_register_request SET status = ?,  updated_by  = ?, updated_time = ? WHERE id = ?', [status, authUserId, currentDateTime, id]);

        if (result.status) {
            return DefaultResponse.successFormat("200");
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const user_register_request_delete = async (userRegisterRequestId: number) =>{

    try {

        let result = await db.query('DELETE FROM user_register_request WHERE id = ?', [userRegisterRequestId]);

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
    user_register_request_add,
    user_register_request_edit,
    user_register_request_view,
    user_register_request_list,
    user_register_request_delete,
    user_register_request_edit_status
}


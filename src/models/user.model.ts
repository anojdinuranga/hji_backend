import bcrypt from "bcrypt";
import config from './../config/config';
import jwt from 'jsonwebtoken';
import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';



const user_check = async ( authUserId: number ) => {

    try {

        let result = await db.query(`SELECT user.id, user.role, user.name, user.email FROM user WHERE user.id = ? && user.status = ?`, [ authUserId, 2]);
        if (!result.status) {
            return result;
        }
        if(result.data.length === 0) {
            return DefaultResponse.errorFormat("404");
        }
        return DefaultResponse.successFormat("200", result.data[0]);

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const user_is_exist = async (employeeNumber: string) => {

    try {

        let result = await db.query('SELECT COUNT(*) as count FROM user WHERE user.employee_number = ?', [employeeNumber]);
        if (result.status) {
            return result.data[0].count > 0;
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return false;
    }
    
};

const user_logout = async ( hashToken: string, authUserId: number ) => {

    try {

        let result = await db.query('UPDATE `user_login_session` SET status = ? WHERE token = ? && user_id = ? ', [2, hashToken, authUserId]);

        if (result.status) {
            return DefaultResponse.successFormat("200");
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const user_login = async ( employeeNumber:string, password:string ) => {

    password = await bcrypt.hash( password, config.pass_salt ); // Hash the password
    console.log("🚀 ~ constuser_login= ~ password:", password)
    
    let result  = await db.query('SELECT user.id, user.role FROM user WHERE user.employee_number = ? && user.password = ? && user.status = 2', [employeeNumber, password]);

    // If error in sql query
    if ( !result.status ) {
        return result;
    }

    // If wrong password
    if ( result.data.length === 0 ) {
        return DefaultResponse.errorFormat('001')
    }

    const accessToken = jwt.sign(
        { user: result.data[0].id, role: result.data[0].role },
        config.jwt_access_key,
        {
            expiresIn: parseInt(config.jwt_a_max_age),
        }
    );

    return DefaultResponse.successFormat("200", {
        accessToken: accessToken,
        role: result.data[0].role,
        userId: result.data[0].id
    });

};

const user_add = async ( employeeNumber: string, name: string, password: string, email: string|null, mobile: string|null,department:number,designation:number, authUserId:number ) => {

    try {

        password = await bcrypt.hash( password, config.pass_salt ); // Hash the password
        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");

        let result = await db.query(`
            INSERT INTO 
                user (employee_number, name, password, email, mobile,department,designation, role, status, added_by, added_time) 
            VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)
        `, [employeeNumber, name, password, email, mobile,department,designation, 2, 2, authUserId, currentDateTime]);

        if (result.status) {
            return DefaultResponse.successFormat("200", {
                userId: result.data.insertId
            });
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const user_list = async () => {

    try {

        let result = await db.query(`
            SELECT 
                user.id, 
                user.employee_number, 
                user.name, 
                user.email, 
                user.mobile, 
                user.role, 
                user.status,
                status.name AS status_name,
                user_role.name AS role_name,
                user.added_by,
                user.updated_by,
                user_add.name AS added_by_name,
                user_update.name AS updated_by_name
            FROM user
            LEFT JOIN user_role ON user.role = user_role.id
            LEFT JOIN status ON user.status = status.id    
            LEFT JOIN user user_add ON user.added_by = user_add.id
            LEFT JOIN user user_update ON user.updated_by = user_update.id
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

const user_view = async (userId: number) => {

    try {

        let result = await db.query(`
            SELECT 
                user.id, 
                user.employee_number, 
                user.name, 
                user.email, 
                user.mobile, 
                user.role, 
                user.status,
                status.name AS status_name,
                user_role.name AS role_name,
                user.added_by,
                user.updated_by,
                user_add.name AS added_by_name,
                user_update.name AS updated_by_name
            FROM user
            LEFT JOIN user_role ON user.role = user_role.id
            LEFT JOIN status ON user.status = status.id    
            LEFT JOIN user user_add ON user.added_by = user_add.id
            LEFT JOIN user user_update ON user.updated_by = user_update.id
            WHERE user.id = ?`, [userId]);

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

const user_edit = async (userId: number, employeeNumber: string, name: string, email: string, mobile: string,department:number,designation:number, authUserId:number) => {

    try {
        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");

        let result = await db.query('UPDATE user SET employee_number = ?, name = ?, email = IF(email = ?, email, ?), mobile = ?,department = ?,designation = ?, updated_by = ?, updated_time = ? WHERE id = ?', [employeeNumber, name, email, email, mobile, department,designation, authUserId, currentDateTime, userId]);
        console.log("🚀 ~ constuser_edit= ~ result:", result)

        if (result.status) {
            return DefaultResponse.successFormat("200");
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const user_delete = async (userId: number) => {

    try {

        let result = await db.query('DELETE FROM user WHERE id = ?', [userId]);

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
    user_check,
    user_logout,
    user_login,
    user_add,
    user_edit,
    user_view,
    user_list,
    user_delete,
    user_is_exist
}
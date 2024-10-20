import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';

const department_add = async ( departmentName: string, authUserId: number ) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
    
        let result = await db.query('INSERT INTO `department`(department_name,status, added_by, added_time) VALUES (?, ?, ?, ?)', [departmentName,1, authUserId, currentDateTime]);

        if (result.status) {
            return DefaultResponse.successFormat("200", {
                insertId: result.data.insertId
            });
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const department_list = async () => {
    try {
        let result = await db.query(`
            SELECT 
                department.id, 
                department.department_name, 
                department.added_by, 
                DATE_FORMAT(department.added_time, '%Y-%m-%d %H:%i:%s') AS added_time, 
                department.updated_by, 
                DATE_FORMAT(department.updated_time, '%Y-%m-%d %H:%i:%s') AS updated_time
            FROM department 
            WHERE department.status = ? 
            ORDER BY department.id DESC
        `, [1]); // Only select departments where status = 1
        
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};


const department_view = async ( id: number ) => {

    try {

        let result = await db.query(`
            SELECT 
                department.id, 
                department.department_name, 
                department.added_by, 
                DATE_FORMAT(department.added_time, '%Y-%m-%d %H:%i:%s') AS added_time, 
                department.updated_by, 
                DATE_FORMAT(department.updated_time, '%Y-%m-%d %H:%i:%s') AS updated_time,
                GROUP_CONCAT(department_designation.designation) AS designations
            FROM 
                department
            LEFT JOIN 
                department_designation ON department_designation.department_id = department.id
            WHERE 
                department.id = ?
            GROUP BY 
                department.id
        `, [id]);
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

const department_edit = async ( departmentName: string, authUserId: number, id: number ) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
    
        let result = await db.query('UPDATE `department` SET department_name = ?, updated_by = ?, updated_time = ? WHERE id = ? ', [departmentName, authUserId, currentDateTime, id]);

        if (result.status) {
            return DefaultResponse.successFormat("200");
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const department_delete = async (departmentId: number) => {
    try {
        
        let result = await db.query('UPDATE department SET status = ? WHERE id = ?', [404, departmentId]);

        if (result.status) {
            return DefaultResponse.successFormat("200", { message: "Department Deleted successfully." });
        }

        return DefaultResponse.errorFormat("404", { message: "Department not found." });

    } catch (err) {
        // Log the error for debugging
        logger.error(err);
        return DefaultResponse.errorFormat("500", { message: "Internal Server Error." });
    }
};

export default {
    department_add,
    department_list,
    department_view,
    department_edit,
    department_delete
}
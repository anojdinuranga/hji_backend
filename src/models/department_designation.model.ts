import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';

const department_designation_add = async ( departmentId: number, designation: string, authUserId: number ) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
    
        let result = await db.query('INSERT INTO `department_designation`(department_id, designation,status, added_by, added_time) VALUES (?, ?, ?,? , ?)', [departmentId, designation, 1, authUserId, currentDateTime]);

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

const department_designation_edit = async ( departmentId: number, designation: string, authUserId: number, id: number ) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
    
        let result = await db.query('UPDATE `department_designation` SET department_id = ?, designation = ?, updated_by = ?, updated_time = ? WHERE id = ? ', [departmentId, designation, authUserId, currentDateTime, id]);

        if (result.status) {
            return DefaultResponse.successFormat("200");
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const department_designation_delete_all = async (departmentId: number, authUserId: number) => {
    try {
        // You can include a log statement here for debugging purposes
        logger.info(`Deleting all designations for department ID: ${departmentId}`);

        // Construct the SQL query to delete all designations related to the department ID
        const result = await db.query('DELETE FROM `department_designation` WHERE department_id = ?', [departmentId]);

        if (result.status) {
            // Optionally, log the deletion result
            logger.info(`Successfully deleted designations for department ID: ${departmentId}`);
            return DefaultResponse.successFormat("200", { message: "All designations deleted successfully." });
        }
        
        // Return the result in case of failure
        return DefaultResponse.errorFormat("400", { message: "Failed to delete designations." });
    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500", { message: "Internal Server Error." });
    }
};


const department_designation_list = async (  ) => {

    try {

        let result = await db.query(`SELECT department_designation.id, department_designation.department_id, department_designation.designation, department_designation.added_by, DATE_FORMAT(department_designation.added_time, '%Y-%m-%d %H:%i:%s') AS added_time, department_designation.updated_by, DATE_FORMAT(department_designation.updated_time, '%Y-%m-%d %H:%i:%s') AS updated_time
        FROM department_designation
        INNER JOIN department ON department.id = department_designation.department_id ORDER BY department_designation.id DESC`, [ ]);
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const department_designation_view = async ( id: number ) => {

    try {

        let result = await db.query(`
            SELECT 
                department_designation.id, 
                department_designation.department_id, 
                department_designation.designation, 
                department_designation.added_by, 
                DATE_FORMAT(department_designation.added_time, '%Y-%m-%d %H:%i:%s') AS added_time, 
                department_designation.updated_by, 
                DATE_FORMAT(department_designation.updated_time, '%Y-%m-%d %H:%i:%s') AS updated_time
            FROM 
                department_designation
            WHERE 
                department_designation.department_id = ?
        `, [id]);
    
        if (!result.status) {
            return result;
        }
    
        if(result.data.length === 0) {
            return DefaultResponse.errorFormat("404");
        }
        return DefaultResponse.successFormat("200", result.data);

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

export default {
    department_designation_add,
    department_designation_edit,
    department_designation_list,
    department_designation_view,
    department_designation_delete_all
}
import bcrypt from "bcrypt";
import config from './../config/config';
import jwt from 'jsonwebtoken';
import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';



const enquiry_main_fabric_add = async (enquiryId: number, knitStructure: string|null, blend: string|null, gsm: number|null, finish: string|null, dryMethod: string|null, placement: string|null, authUserId: number) => 
{

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");

        let result = await db.query(`
            INSERT INTO 
                enquiry_main_fabric (enquiry_id, knit_structure, blend, gsm, finish, dry_method, placement, added_by, added_time) 
            VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
            enquiryId, knitStructure, blend, gsm, finish, dryMethod, placement, authUserId, currentDateTime
        ]);

        if (result.status) {
            return DefaultResponse.successFormat("200", {
                enquiryMainFabricId: result.data.insertId
            });
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const enquiry_main_fabric_edit = async (enquiryMainFabricId: number, knitStructure: string|null, blend: string|null, gsm: number|null, finish: string|null, dryMethod: string|null, placement: string|null, authUserId: number) => 
{

    try {
        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");

        let result = await db.query('UPDATE enquiry_main_fabric SET knit_structure = ?, blend = ?, gsm = ?, finish = ?, dry_method = ?, placement = ?, updated_by = ?, updated_time = ? WHERE id = ?', [
            knitStructure, blend, gsm, finish, dryMethod, placement, authUserId, currentDateTime, enquiryMainFabricId
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

const enquiry_main_fabric_view = async (enquiryMainFabricId: number) => {

    try {

        let result = await db.query(`
            SELECT 
                *
            FROM enquiry_main_fabric 
            WHERE enquiry_id = ?
        `, [enquiryMainFabricId]);

        if (result.status) {
            if (result.data.length === 0) {
                return DefaultResponse.errorFormat("404");
            }
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const enquiry_main_fabric_list = async () =>{

    try {

        let result = await db.query(`
            SELECT 
                *
            FROM enquiry_main_fabric
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

const enquiry_main_fabric_delete = async (enquiryMainFabricId: number) =>{

    try {

        let result = await db.query('DELETE FROM enquiry_main_fabric WHERE id = ?', [enquiryMainFabricId]);

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
    enquiry_main_fabric_add,
    enquiry_main_fabric_edit,
    enquiry_main_fabric_view,
    enquiry_main_fabric_list,
    enquiry_main_fabric_delete
}


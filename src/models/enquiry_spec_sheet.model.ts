import bcrypt from "bcrypt";
import config from './../config/config';
import jwt from 'jsonwebtoken';
import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';



const enquiry_spec_sheet_add = async (enquiryId: number, pointOfMeasure: string|null, code: string|null, howToMeasure: string|null, critical: number|null, type: number|null, tolerance: number|null, s: number|null, m: number|null, l: number|null, xl: number|null) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");

        let result = await db.query(`
            INSERT INTO 
                enquiry_spec_sheet (enquiry_id, point_of_measure, code, how_to_measure, critical, type, tolerance, s, m, l, xl, added_time) 
            VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
            enquiryId, pointOfMeasure, code, howToMeasure, critical, type, tolerance, s, m, l, xl, currentDateTime
        ]);

        if (result.status) {
            return DefaultResponse.successFormat("200", {
                enquirySpecSheetId: result.data.insertId
            });
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const enquiry_spec_sheet_list = async () =>{

    try {

        let result = await db.query(`
            SELECT 
                *
            FROM enquiry_spec_sheet
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

const enquiry_spec_sheet_view = async (enquirySpecSheetId: number) => {

    try {

        let result = await db.query(`
            SELECT 
                *
            FROM enquiry_spec_sheet 
            WHERE id = ?
        `, [enquirySpecSheetId]);

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
const enquiry_spec_sheet_edit = async (enquirySpecSheetId: number, pointOfMeasure: string|null, code: string|null, howToMeasure: string|null, critical: number|null, type: number|null, tolerance: number|null, s: number|null, m: number|null, l: number|null, xl: number|null) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");

        let result = await db.query('UPDATE enquiry_spec_sheet SET point_of_measure = ?, code = ?, how_to_measure = ?, critical = ?, type = ?, tolerance = ?, s = ?, m = ?, l = ?, xl = ?, updated_time = ? WHERE id = ?', [
            pointOfMeasure, code, howToMeasure, critical, type, tolerance, s, m, l, xl, currentDateTime, enquirySpecSheetId
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

const enquiry_spec_sheet_delete = async (enquirySpecSheetId: number) =>{

    try {

        let result = await db.query('DELETE FROM enquiry_spec_sheet WHERE id = ?', [enquirySpecSheetId]);

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
    enquiry_spec_sheet_add,
    enquiry_spec_sheet_edit,
    enquiry_spec_sheet_view,
    enquiry_spec_sheet_list,
    enquiry_spec_sheet_delete
}




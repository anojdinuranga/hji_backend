import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';

const enquiry_value_added_add = async ( enquiryId: number, values: string, authUserId: number ) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");
    
        let result = await db.query(
            'INSERT INTO `enquiry_value_added`(`enquiry_id`, `values`, `added_by`, `added_time`) VALUES (?, ?, ?, ?)', 
            [enquiryId, values, authUserId, currentDateTime]
        );

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

export default {
    enquiry_value_added_add
}
import devModel from "../models/dev.model";
import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {sql_run_data} from "../config/types/dev";

const sql_run = async ( data: sql_run_data ) => {

    try {

        let result;
        result = await devModel.sql_run( data.sql );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

export default {
    sql_run
}
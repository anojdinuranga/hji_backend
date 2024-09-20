import services from "../services/dev.service";
import logger from '../config/logger';
import validate from "./../validate/dev.validate";
import { Response } from "express";
import { ExtendedRequest } from "../config/types";
import DefaultResponse from "../utils/DefaultResponse";
import authorize from "../utils/authorize";
import catchAsync from "../utils/catchAsync";
import validateInput from "../utils/validate";

const sql_run = catchAsync(async (req: ExtendedRequest, res: Response) => {

    try{

        /**
         * @detail
         * Input Validation
         */
        const data = await validateInput(req.body, validate.sql_run);
        if (!data.status) {
            res.status(200).send( data );
            return;
        }

        /**
         * @detail
         * Authorization
         */
        let authData = authorize('dev', 'sql_run', req);
        if (!authData.status) {
            DefaultResponse.error(res, '403');
            return;
        }
        data.data.authUserId = authData.data.user;
        data.data.authUserRole = authData.data.role;
        
        /**
         * @detail
         * Service function call
         */
        const result = await services.sql_run( data.data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});

export default {
    sql_run
}
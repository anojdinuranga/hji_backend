import DeviceDetector from "node-device-detector";
import {validateIPAddress, xssPrevent} from "../utils/commonValidation";
import services from "../services/file.service";
import logger from '../config/logger';
import validate from "../validate/client.validate";
import { Response } from "express";
import { ExtendedRequest } from "../config/types";
import DefaultResponse from "../utils/DefaultResponse";
import authorize from "../utils/authorize";
import catchAsync from "../utils/catchAsync";
import validateInput from "../utils/validate";

const single_file_upload = catchAsync(async (req: any, res: any) => {
    
    try{
        let data:any={};
        /**
         * @detail
         * Authorization
         */
        let authData = authorize('file', 'single_file_upload', req);
        if (!authData.status) {
            DefaultResponse.error(res, '403');
            return;
        }
        data.authUserId = authData.data.user;
        data.authUserRole = authData.data.role;
        data.fileData=req.body;
        
        /**
         * @detail
         * Service function call
         */
        const result = await services.single_file_upload( data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});

export default {
    single_file_upload,
}
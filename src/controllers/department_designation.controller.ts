import services from "../services/department_designation.service";
import logger from '../config/logger';
import validate from "./../validate/department_designation.validate";
import { Response } from "express";
import { ExtendedRequest } from "../config/types";
import DefaultResponse from "../utils/DefaultResponse";
import authorize from "../utils/authorize";
import catchAsync from "../utils/catchAsync";
import validateInput from "../utils/validate";

const department_designation_add = catchAsync(async (req: ExtendedRequest, res: Response) => {

    try{

        /**
         * @detail
         * Input Validation
         */
        const data = await validateInput(req.body, validate.department_designation_add);
        if (!data.status) {
            res.status(200).send( data );
            return;
        }

        /**
         * @detail
         * Authorization
         */
        let authData = authorize('department_designation', 'department_designation_add', req);
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
        const result = await services.department_designation_add( data.data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});

const department_designation_edit = catchAsync(async (req: ExtendedRequest, res: Response) => {

    try{

        /**
         * @detail
         * Input Validation
         */
        const data = await validateInput(req.body, validate.department_designation_edit);
        if (!data.status) {
            res.status(200).send( data );
            return;
        }

        /**
         * @detail
         * Authorization
         */
        let authData = authorize('department_designation', 'department_designation_edit', req);
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
        const result = await services.department_designation_edit( data.data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});

const department_designation_list = catchAsync(async (req: ExtendedRequest, res: Response) => {

    try{

        /**
         * @detail
         * Input Validation
         */
        const data = await validateInput(req.body, validate.department_designation_list);
        if (!data.status) {
            res.status(200).send( data );
            return;
        }

        /**
         * @detail
         * Authorization
         */
        let authData = authorize('department_designation', 'department_designation_list', req);
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
        const result = await services.department_designation_list( data.data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});

const department_designation_view = catchAsync(async (req: ExtendedRequest, res: Response) => {

    try{

        /**
         * @detail
         * Input Validation
         */
        const data = await validateInput(req.body, validate.department_designation_view);
        if (!data.status) {
            res.status(200).send( data );
            return;
        }

        /**
         * @detail
         * Authorization
         */
        let authData = authorize('department_designation', 'department_designation_view', req);
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
        const result = await services.department_designation_view( data.data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});

export default {
    department_designation_add,
    department_designation_edit,
    department_designation_list,
    department_designation_view
}
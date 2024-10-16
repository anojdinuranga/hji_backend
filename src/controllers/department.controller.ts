import services from "../services/department.service";
import logger from '../config/logger';
import validate from "./../validate/department.validate";
import { Response } from "express";
import { ExtendedRequest } from "../config/types";
import DefaultResponse from "../utils/DefaultResponse";
import authorize from "../utils/authorize";
import catchAsync from "../utils/catchAsync";
import validateInput from "../utils/validate";

const department_add = catchAsync(async (req: ExtendedRequest, res: Response) => {

    try{

        /**
         * @detail
         * Input Validation
         */
        const data = await validateInput(req.body, validate.department_add);
        if (!data.status) {
            res.status(200).send( data );
            return;
        }

        /**
         * @detail
         * Authorization
         */
        let authData = authorize('department', 'department_add', req);
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
        const result = await services.department_add( data.data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});

const department_edit = catchAsync(async (req: ExtendedRequest, res: Response) => {

    try{

        /**
         * @detail
         * Input Validation
         */
        const data = await validateInput(req.body, validate.department_edit);
        if (!data.status) {
            res.status(200).send( data );
            return;
        }

        /**
         * @detail
         * Authorization
         */
        let authData = authorize('department', 'department_edit', req);
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
        const result = await services.department_edit( data.data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});

const department_list = catchAsync(async (req: ExtendedRequest, res: Response) => {

    try{

        /**
         * @detail
         * Input Validation
         */
        const data = await validateInput(req.body, validate.department_list);
        if (!data.status) {
            res.status(200).send( data );
            return;
        }

        /**
         * @detail
         * Authorization
         */
        let authData = authorize('department', 'department_list', req);
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
        const result = await services.department_list( data.data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});

const department_view = catchAsync(async (req: ExtendedRequest, res: Response) => {

    try{

        /**
         * @detail
         * Input Validation
         */
        const data = await validateInput(req.body, validate.department_view);
        if (!data.status) {
            res.status(200).send( data );
            return;
        }

        /**
         * @detail
         * Authorization
         */
        let authData = authorize('department', 'department_view', req);
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
        const result = await services.department_view( data.data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});

export default {
    department_add,
    department_edit,
    department_list,
    department_view
}
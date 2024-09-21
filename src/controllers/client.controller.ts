import DeviceDetector from "node-device-detector";
import {validateIPAddress, xssPrevent} from "../utils/commonValidation";
import services from "../services/client.service";
import logger from '../config/logger';
import validate from "../validate/client.validate";
import { Response } from "express";
import { ExtendedRequest } from "../config/types";
import DefaultResponse from "../utils/DefaultResponse";
import authorize from "../utils/authorize";
import catchAsync from "../utils/catchAsync";
import validateInput from "../utils/validate";

const client_add = catchAsync(async (req: ExtendedRequest, res: Response) => {

    try{

        /**
         * @detail
         * Input Validation
         */
        const data = await validateInput(req.body, validate.client_add);
        if (!data.status) {
            res.status(200).send( data );
            return;
        }

        /**
         * @detail
         * Authorization
         */
        let authData = authorize('client', 'client_add', req);
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
        const result = await services.client_add( data.data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});

const client_edit = catchAsync(async (req: ExtendedRequest, res: Response) => {

    try{

        /**
         * @detail
         * Input Validation
         */
        const data = await validateInput(req.body, validate.client_edit);
        if (!data.status) {
            res.status(200).send( data );
            return;
        }

        /**
         * @detail
         * Authorization
         */
        let authData = authorize('client', 'client_edit', req);
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
        const result = await services.client_edit( data.data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});

const client_view = catchAsync(async (req: ExtendedRequest, res: Response) => {

    try{

        /**
         * @detail
         * Input Validation
         */
        const data = await validateInput(req.body, validate.client_view);
        if (!data.status) {
            res.status(200).send( data );
            return;
        }

        /**
         * @detail
         * Authorization
         */
        let authData = authorize('client', 'client_view', req);
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
        const result = await services.client_view( data.data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});

const client_list = catchAsync(async (req: ExtendedRequest, res: Response) => {

    try{

        /**
         * @detail
         * Input Validation
         */
        const data = await validateInput(req.body, validate.client_list);
        if (!data.status) {
            res.status(200).send( data );
            return;
        }

        /**
         * @detail
         * Authorization
         */
        let authData = authorize('client', 'client_list', req);
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
        const result = await services.client_list( data.data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});

const client_delete = catchAsync(async (req: ExtendedRequest, res: Response) => {

    try{

        /**
         * @detail
         * Input Validation
         */
        const data = await validateInput(req.body, validate.client_delete);
        if (!data.status) {
            res.status(200).send( data );
            return;
        }

        /**
         * @detail
         * Authorization
         */
        let authData = authorize('client', 'client_delete', req);
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
        const result = await services.client_delete( data.data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});

export default {
    client_add,
    client_edit,
    client_view,
    client_list,
    client_delete
}
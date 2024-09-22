import services from "../services/user_register_request.service";
import logger from '../config/logger';
import validate from "../validate/user_register_request.validate";
import { Response } from "express";
import { ExtendedRequest } from "../config/types";
import DefaultResponse from "../utils/DefaultResponse";
import authorize from "../utils/authorize";
import catchAsync from "../utils/catchAsync";
import validateInput from "../utils/validate";

const user_register_request_add = catchAsync(async (req: ExtendedRequest, res: Response) =>{

    try{

        /**
         * @detail
         * Input Validation
         */
        const data = await validateInput(req.body, validate.user_register_request_add);
        if (!data.status) {
            res.status(200).send( data );
            return;
        }

        /**
         * @detail
         * Authorization
         */
        let authData = authorize('user_register_request', 'user_register_request_add', req);
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
        const result = await services.user_register_request_add( data.data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});

const user_register_request_view = catchAsync(async (req: ExtendedRequest, res: Response) =>{

    try{

        /**
         * @detail
         * Input Validation
         */
        const data = await validateInput(req.body, validate.user_register_request_view);
        if (!data.status) {
            res.status(200).send( data );
            return;
        }

        /**
         * @detail
         * Authorization
         */
        let authData = authorize('user_register_request', 'user_register_request_view', req);
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
        const result = await services.user_register_request_view( data.data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});

const user_register_request_list = catchAsync(async (req: ExtendedRequest, res: Response) =>{

    try{

        /**
         * @detail
         * Input Validation
         */
        const data = await validateInput(req.body, validate.user_register_request_list);
        if (!data.status) {
            res.status(200).send( data );
            return;
        }

        /**
         * @detail
         * Authorization
         */
        let authData = authorize('user_register_request', 'user_register_request_list', req);
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
        const result = await services.user_register_request_list( data.data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});

const user_register_request_delete = catchAsync(async (req: ExtendedRequest, res: Response) =>{

    try{

        /**
         * @detail
         * Input Validation
         */
        const data = await validateInput(req.body, validate.user_register_request_delete);
        if (!data.status) {
            res.status(200).send( data );
            return;
        }

        /**
         * @detail
         * Authorization
         */
        let authData = authorize('user_register_request', 'user_register_request_delete', req);
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
        const result = await services.user_register_request_delete( data.data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});
const user_register_request_edit = catchAsync(async (req: ExtendedRequest, res: Response) =>{

    try{

        /**
         * @detail
         * Input Validation
         */
        const data = await validateInput(req.body, validate.user_register_request_edit);
        if (!data.status) {
            res.status(200).send( data );
            return;
        }

        /**
         * @detail
         * Authorization
         */
        let authData = authorize('user_register_request', 'user_register_request_edit', req);
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
        const result = await services.user_register_request_edit( data.data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});

const user_register_request_accept = catchAsync(async (req: ExtendedRequest, res: Response) =>{

    try{

        /**
         * @detail
         * Input Validation
         */
        const data = await validateInput(req.body, validate.user_register_request_accept);
        if (!data.status) {
            res.status(200).send( data );
            return;
        }

        /**
         * @detail
         * Authorization
         */
        let authData = authorize('user_register_request', 'user_register_request_accept', req);
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
        const result = await services.user_register_request_accept( data.data );
        res.status(200).send( result );

    } catch (err){
        logger.error(err);
        DefaultResponse.error(res, "500");
    }
       
});

export default {
    user_register_request_edit,
    user_register_request_accept,
    user_register_request_add,
    user_register_request_view,
    user_register_request_list,
    user_register_request_delete
}


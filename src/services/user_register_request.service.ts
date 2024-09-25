import user_register_requestModel from "../models/user_register_request.model";
import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {user_register_request_add_data,
        user_register_request_edit_data,
        user_register_request_list_data,
        user_register_request_view_data,
        user_register_request_delete_data,
        user_register_request_accept_data,
        user_register_request_reject_data
    } from "../config/types/userRegisterRequest";
import userModel from "../models/user.model";


const user_register_request_add = async ( data: user_register_request_add_data ) =>{

    try {
        let isUserExist = await userModel.user_is_exist(data.employeeNumber);
        if(isUserExist) {
            return DefaultResponse.errorFormat("000", "employee number already exist");
        }

        let result;
        result = await user_register_requestModel.user_register_request_add( data.name, data.employeeNumber, data.authUserId);
        if(!result.status) {
            return result;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const user_register_request_edit = async ( data: user_register_request_edit_data ) =>{

    try {

        let result;
        result = await user_register_requestModel.user_register_request_edit(data.id, data.name, data.employeeNumber, data.authUserId);
        if(!result.status) {
            return result;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const user_register_request_view = async ( data:user_register_request_view_data ) =>{

    try {

        let result;
        result = await user_register_requestModel.user_register_request_view( data.id );
        if(!result.status) {
            return result;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const user_register_request_list = async (data:user_register_request_list_data) =>{

    try {

        let result;
        result = await user_register_requestModel.user_register_request_list(data.authUserRole, data.authUserId);
        if(!result.status) {
            return result;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const user_register_request_delete = async ( data:user_register_request_delete_data ) =>{

    try {

        let result;
        result = await user_register_requestModel.user_register_request_delete( data.id );
        if(!result.status) {
            return result;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};
const user_register_request_reject = async ( data:user_register_request_reject_data ) =>{

    try {

        let result;
        result = await user_register_requestModel.user_register_request_edit_status( 3,data.id, data.authUserId );
        if(!result.status) {
            return result;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};
const user_register_request_accept = async ( data:user_register_request_accept_data ) =>{

    try {
        let userRegisterRequest = await user_register_requestModel.user_register_request_view(data.id);
        if(!userRegisterRequest.status) {
            return userRegisterRequest;
        }
        console.log("🚀 ~ constuser_register_request_accept= ~ userRegisterRequest:", userRegisterRequest.data);

        let userAdd = await userModel.user_add(userRegisterRequest.data.employee_number, userRegisterRequest.data.name, data.password, data.email, data.mobile, data.authUserId);
        if(!userAdd.status) {
            return userAdd;
        }

        let result;
        result = await user_register_requestModel.user_register_request_edit_status( 2, data.id, data.authUserId );
        if(!result.status) {
            return result;
        }

        return userAdd;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

export default {
    user_register_request_add,
    user_register_request_edit,
    user_register_request_view,
    user_register_request_list,
    user_register_request_delete,
    user_register_request_accept,
    user_register_request_reject
}



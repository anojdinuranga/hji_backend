import userModel from "../models/user.model";
import userLoginSessionModel from "../models/user_login_session.model";
import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {user_login_data,
        user_check_data, 
        user_logout_data, 
        user_add_data,
        user_edit_data,
        user_list_data,
        user_view_data,
        user_delete_data
    } from "../config/types/user";



const user_check = async ( data: user_check_data ) => {

    try {

        let result;
        result = await userModel.user_check( data.authUserId );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const user_logout = async ( data: user_logout_data ) => {

    try {

        let result;
        result = await userModel.user_logout( data.hashToken, data.authUserId );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const user_login = async ( data: user_login_data ) => {

    try {

        let result;
        result = await userModel.user_login( data.employeeNumber, data.password );
        if(!result.status) {
            return result;
        }
        // User login session add
        let session = await userLoginSessionModel.user_login_session_add(result.data.userId, result.data.accessToken, data.ipAddress, data.osName);
        if(!session.status) {
            return session;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const user_add = async ( data: user_add_data ) => {

    try {

        let result;
        result = await userModel.user_add( data.employeeNumber, data.name, data.password, data.email, data.mobile,data.department,data.designation,data.approveLevel, data.authUserId);
        if(!result.status) {
            return result;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const user_edit = async ( data: user_edit_data ) => {

    try {

        let result;
        result = await userModel.user_edit( data.userId, data.employeeNumber, data.name, data.email, data.mobile,data.department,data.designation,data.approveLevel, data.authUserId );
        if(!result.status) {
            return result;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const user_view = async ( data:user_view_data ) => {

    try {

        let result;
        result = await userModel.user_view( data.userId );
        if(!result.status) {
            return result;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const user_list = async (data:user_list_data) => {

    try {

        let result;
        result = await userModel.user_list();
        if(!result.status) {
            return result;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const user_delete = async ( data:user_delete_data ) => {

    try {

        let result;
        result = await userModel.user_delete( data.userId );
        if(!result.status) {
            return result;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

export default {
    user_check,
    user_logout,
    user_login,
    user_add,
    user_edit,
    user_view,
    user_list,
    user_delete,
}
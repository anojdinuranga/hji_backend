import clientModel from "../models/client.model";
import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {client_add_data,
        client_edit_data,
        client_list_data,
        client_view_data,
        client_delete_data
    } from "../config/types/client";


const client_add = async ( data: client_add_data ) =>{

    try {

        let result;
        result = await clientModel.client_add( data.name, data.contactNumber, data.email, data.pocName, data.pocContactNumber, data.headOfficeAddress, data.logo, data.authUserId);
        if(!result.status) {
            return result;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const client_edit = async ( data: client_edit_data ) =>{

    try {

        let result;
        result = await clientModel.client_edit( data.id, data.name, data.contactNumber, data.email, data.pocName, data.pocContactNumber, data.headOfficeAddress, data.logo, data.authUserId );
        if(!result.status) {
            return result;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const client_view = async ( data:client_view_data ) =>{

    try {

        let result;
        result = await clientModel.client_view( data.id );
        if(!result.status) {
            return result;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const client_list = async (data:client_view_data) =>{

    try {

        let result;
        result = await clientModel.client_list();
        if(!result.status) {
            return result;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const client_delete = async ( data:client_delete_data ) =>{

    try {

        let result;
        result = await clientModel.client_delete( data.id );
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
    client_add,
    client_edit,
    client_view,
    client_list,
    client_delete,
}

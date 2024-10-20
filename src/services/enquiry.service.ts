import enquiryModel from "../models/enquiry.model";
import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {enquiry_add_data,
        enquiry_edit_data,
        enquiry_list_data,
        enquiry_view_data,
        enquiry_delete_data
    } from "../config/types/enquiry";
import enquiry_main_fabricModel from "../models/enquiry_main_fabric.model";
import enquiry_accessory_fabricModel from "../models/enquiry_accessory_fabric.model";
import enquiry_trimsModel from "../models/enquiry_trims.model";
import enquiry_spec_sheetModel from "../models/enquiry_spec_sheet.model";


const enquiry_add = async ( data: enquiry_add_data ) =>{

    try {

        let result;
        result = await enquiryModel.enquiry_add(data.client, data.type, data.file, data.developmentType, data.orderType, data.sampleType,data.file2, data.authUserId);
        
        if(result.status){
            await enquiryModel.enquiry_data_edit();
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const enquiry_edit = async ( data: enquiry_edit_data ) =>{

    try {

        let result;
        result = await enquiryModel.enquiry_edit(data.id, data.client, data.type, data.file, data.developmentType, data.orderType, data.sampleType,data.file2, data.authUserId);
        console.log("🚀 ~ constenquiry_edit= ~ data:", data)
        if(!result.status) {
            return result;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const enquiry_view = async ( data: enquiry_view_data ) =>{

    try {

        let result;
        result = await enquiryModel.enquiry_view( data.id );
        if(!result.status) {
            return result;
        }
        
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const enquiry_list = async (data:enquiry_list_data) =>{

    try {

        let result;
        result = await enquiryModel.enquiry_list(data.type,data.status,data.authUserId);
        if(!result.status) {
            return result;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const enquiry_delete = async ( data:enquiry_delete_data ) =>{

    try {

        let result;
        result = await enquiryModel.enquiry_delete( data.id );
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
    enquiry_add,
    enquiry_edit,
    enquiry_view,
    enquiry_list,
    enquiry_delete,
}


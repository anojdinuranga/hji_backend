import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {enquiry_data_add_data,
        enquiry_data_edit_data,
        enquiry_data_list_data,
        enquiry_data_view_data,
        enquiry_data_delete_data,
    } from "../config/types/enquiry_data";
import enquiry_accessory_fabricModel from "../models/enquiry_accessory_fabric.model";
import enquiry_main_fabricModel from "../models/enquiry_main_fabric.model";
import enquiry_trimsModel from "../models/enquiry_trims.model";
import enquiry_spec_sheetModel from "../models/enquiry_spec_sheet.model";
import enquiry_comboModel from "../models/enquiry_combo.model";
import enquiry_value_addedModel from "../models/enquiry_value_added.model";

const enquiry_data_add = async ( data: enquiry_data_add_data ) =>{

    try {

        let result:any;

        if(data.enquiryAccessoriesFabrics) {
            await Promise.all(
                data.enquiryAccessoriesFabrics.map(async (item) => {
                    await enquiry_accessory_fabricModel.enquiry_accessory_fabric_add(data.enquiryId, item.knitStructure, item.blend, item.gsm, item.placement);
                })
            );
            await Promise.all(
                data.enquiryMainFabrics.map(async (item) => {
                    await enquiry_main_fabricModel.enquiry_main_fabric_add(data.enquiryId, item.knitStructure, item.blend, item.gsm, item.finish, item.dryMethod, item.placement, data.authUserId);
                })
            );   
            await Promise.all(
                data.enquiryTrims.map(async (item) => {
                    await enquiry_trimsModel.enquiry_trim_add(data.enquiryId, item.type, item.description, item.content, item.placement, data.authUserId);
                })
            );
            await Promise.all(
                data.enquirySpecSheets.map(async (item) => {
                    await enquiry_spec_sheetModel.enquiry_spec_sheet_add(data.enquiryId, item.pointOfMeasure, item.code, item.howToMeasure, item.critical, item.type, item.tolerance, item.s, item.m, item.l, item.xl);
                })
            );
            await Promise.all(
                data.enquiryCombo.map(async (item) => {
                    await enquiry_comboModel.enquiry_combo_add(data.enquiryId, item.comboNo, item.size, item.pieces, data.authUserId);
                })
            );
            const valuesAsCommaSeparated = data.values.join(',');
            console.log(JSON.stringify(valuesAsCommaSeparated));
            await enquiry_value_addedModel.enquiry_value_added_add(data.enquiryId, valuesAsCommaSeparated, data.authUserId);
              
        }

        return DefaultResponse.successFormat('200');

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const enquiry_data_edit = async ( data: enquiry_data_edit_data ) =>{

    try {

        return DefaultResponse.successFormat('200');

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const enquiry_data_view = async ( data: enquiry_data_view_data ) =>{

    try {

        return DefaultResponse.successFormat('200');


    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const enquiry_data_list = async (data:enquiry_data_list_data) =>{

    try {

        return DefaultResponse.successFormat('200');


    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const enquiry_data_delete = async ( data:enquiry_data_delete_data ) =>{

    try {

        return DefaultResponse.successFormat('200');


    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

export default {
    enquiry_data_add,
    enquiry_data_edit,
    enquiry_data_view,
    enquiry_data_list,
    enquiry_data_delete,
}



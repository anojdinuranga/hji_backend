import departmentDesignationModel from "../models/department_designation.model";
import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {department_designation_add_data, department_designation_edit_data, department_designation_list_data, department_designation_view_data} from "../config/types/department_designation";

const department_designation_add = async ( data: department_designation_add_data ) => {

    try {

        let result;
        result = await departmentDesignationModel.department_designation_add( data.departmentId, data.designation,data.authUserId );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const department_designation_edit = async ( data: department_designation_edit_data ) => {

    try {

        let result;
        result = await departmentDesignationModel.department_designation_edit( data.departmentId, data.designation,data.authUserId, data.id );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const department_designation_list = async ( data: department_designation_list_data ) => {

    try {

        let result;
        result = await departmentDesignationModel.department_designation_list(  );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const department_designation_view = async ( data: department_designation_view_data ) => {

    try {

        let result;
        result = await departmentDesignationModel.department_designation_view( data.id );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

export default {
    department_designation_add,
    department_designation_edit,
    department_designation_list,
    department_designation_view
}
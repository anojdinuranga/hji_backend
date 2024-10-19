import departmentModel from "../models/department.model";
import departmentDesignationModel from "../models/department_designation.model";
import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {department_add_data, department_edit_data, department_list_data, department_view_data, department_delete_data} from "../config/types/department";

interface DepartmentAddResponse {
    status: boolean;
    data?: {
        insertId: number;
    };
    message?: string;
}

interface DefaultResponse {
    status: boolean;
    message?: string;
}

const department_add = async (data: department_add_data): Promise<DepartmentAddResponse | DefaultResponse> => {
    try {
       
        const result: DepartmentAddResponse = await departmentModel.department_add(data.departmentName, data.authUserId);
        const insertId = result.data?.insertId;

        if (result.status && insertId !== undefined) {
            await Promise.all(
                data.designations.map(async (designation) => {
                    await departmentDesignationModel.department_designation_add(insertId, designation, data.authUserId);
                })
            );   
        }
        
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};



const department_edit = async ( data: department_edit_data ) => {

    try {

        let result;
        result = await departmentModel.department_edit( data.departmentName, data.authUserId, data.id );
        if(!result.status){
            return result;
        }
        let deleteDesignations = await departmentDesignationModel.department_designation_delete_all(data.id, data.authUserId);
        if(deleteDesignations.status){
            await Promise.all(
                data.designations.map(async (designation) => {
                    await departmentDesignationModel.department_designation_add(data.id, designation, data.authUserId);
                })
            );   
        }

        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const department_list = async ( data: department_list_data ) => {

    try {

        let result;
        result = await departmentModel.department_list(  );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const department_view = async ( data: department_view_data ) => {

    try {

        let result;
        result = await departmentModel.department_view( data.id );
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const department_delete = async ( data:department_delete_data ) => {

    try {

        let result;
        result = await departmentModel.department_delete( data.departmentId );
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
    department_add,
    department_edit,
    department_list,
    department_view,
    department_delete
}
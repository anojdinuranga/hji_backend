import joi from "joi";
import { xssPrevent, validatePhoneNumber, isValidDateString, isValidTimeString } from "../utils/commonValidation";

const department_designation_add = joi.object({

    departmentId: joi.number()
        .min(1)
        .max(2147483647)
        .label("department id")
        .messages({ 'string.min': 'wrong department id' })
        .required()
    ,
    designation: joi.string()
        .min(1)
        .max(2147483647)
        .label("designation")
        .messages({ 'string.min': 'wrong designation' })
        .required()
    ,

});

const department_designation_edit = joi.object({

    id: joi.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .messages({ 'string.min': 'wrong id' })
        .required()
    ,
    departmentId: joi.number()
        .min(1)
        .max(2147483647)
        .label("department id")
        .messages({ 'string.min': 'wrong department id' })
        .required()
    ,
    designation: joi.string()
        .min(1)
        .max(2147483647)
        .label("designation")
        .messages({ 'string.min': 'wrong designation' })
        .required()
    ,

});

const department_designation_list = joi.object({


});

const department_designation_view = joi.object({

    id: joi.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .messages({ 'string.min': 'wrong id' })
        .required()
    ,

});

export default {
    department_designation_add,
    department_designation_edit,
    department_designation_list,
    department_designation_view
}
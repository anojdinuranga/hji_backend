import joi from "joi";
import { xssPrevent, validatePhoneNumber, isValidDateString, isValidTimeString } from "../utils/commonValidation";

const department_add = joi.object({

    departmentName: joi.string()
        .min(1)
        .max(100)
        .label("department name")
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,
    designations: joi.array()
        .items(joi.string().min(1).max(100).custom((value, helper) => { return xssPrevent(value); }))
        .required()
});

const department_edit = joi.object({

    id: joi.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .messages({ 'string.min': 'wrong id' })
        .required()
    ,
    departmentName: joi.string()
        .min(1)
        .max(100)
        .label("department name")
        .custom((value, helper) => {return xssPrevent(value);})
        .required()
    ,
    designations: joi.array()
        .items(joi.string().min(1).max(100).custom((value, helper) => { return xssPrevent(value); }))
        .required()

});

const department_list = joi.object({


});

const department_view = joi.object({

    id: joi.number()
        .min(1)
        .max(2147483647)
        .label("id")
        .messages({ 'string.min': 'wrong id' })
        .required()
    ,

});

export default {
    department_add,
    department_edit,
    department_list,
    department_view
}
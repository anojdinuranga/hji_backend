import joi from "joi";
import { xssPrevent, validatePhoneNumber, isValidDateString, isValidTimeString } from "../utils/commonValidation";



const user_check = joi.object({


});

const user_logout = joi.object({


});

const user_login = joi.object({

    employeeNumber: joi.string()
        .min(1)
        .max(1000)
        .label("employee number")
        .messages({ 'string.min': 'wrong employee number' })
        .required()
    ,
    password: joi.string()
        .min(1)
        .max(150)
        .label("password")
        .messages({ 'string.min': 'wrong password' })
        .required()
    ,

});

const user_add = joi.object({

    employeeNumber: joi.string()
        .min(1)
        .max(100)
        .label("employee number")
        .messages({ 'string.min': 'wrong employee number' })
        .required()
    ,
    name: joi.string()
        .min(1)
        .max(100)
        .label("name")
        .messages({ 'string.min': 'wrong name' })
        .required()
    ,
    password: joi.string()
        .min(1)
        .max(150)
        .label("password")
        .messages({ 'string.min': 'wrong password' })
        .required()
    ,
    email: joi.string()
        .min(1)
        .max(320)
        .pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        .label("email")
        .messages({ 'string.min': 'wrong email' })
        .allow(null)
        .required()
    ,
    mobile: joi.string()
        .min(1)
        .max(20)
        .pattern(/[0-9]/)
        .label("mobile")
        .messages({ 'string.min': 'wrong mobile' })
        .allow(null)
        .required()
    ,
    department: joi.number()
        .integer()
        .label("user department")
        .messages({ 'number.base': 'wrong user Department' })
        .required()
    ,
    designation: joi.number()
        .integer()
        .label("user designation")
        .messages({ 'number.base': 'wrong user Designation' })
        .required()
    ,

});

const user_edit = joi.object({
    userId: joi.number()
        .integer()
        .label("user id")
        .messages({ 'number.base': 'wrong user id' })
        .required()
    ,
    employeeNumber: joi.string()
        .min(1)
        .max(100)
        .label("employee number")
        .messages({ 'string.min': 'wrong employee number' })
        .required()
    ,
    name: joi.string()
        .min(1)
        .max(100)
        .label("name")
        .messages({ 'string.min': 'wrong name' })
        .required()
    ,
    email: joi.string()
        .min(1)
        .max(320)
        .pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        .label("email")
        .messages({ 'string.min': 'wrong email' })
        .required()
    ,
    mobile: joi.string()
        .min(1)
        .max(20)
        .pattern(/[0-9]/)
        .label("mobile")
        .messages({ 'string.min': 'wrong mobile' })
        .required()
    ,
    department: joi.number()
        .integer()
        .label("user department")
        .messages({ 'number.base': 'wrong user Department' })
        .required()
    ,
    designation: joi.number()
        .integer()
        .label("user designation")
        .messages({ 'number.base': 'wrong user Designation' })
        .required()
    ,

});

const user_list = joi.object({

});

const user_view = joi.object({
    userId: joi.number()
        .integer()
        .label("user id")
        .messages({ 'number.base': 'wrong user id' })
        .required()
    ,

});

const user_delete = joi.object({
    userId: joi.number()
        .integer()
        .label("user id")
        .messages({ 'number.base': 'wrong user id' })
        .required()
    ,

});

export default {
    user_check,
    user_logout,
    user_login,
    user_add,
    user_edit,
    user_list,
    user_view,
    user_delete,
}
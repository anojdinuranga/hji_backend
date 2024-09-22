import joi from "joi";
import { xssPrevent, validatePhoneNumber, isValidDateString, isValidTimeString } from "../utils/commonValidation";


const user_register_request_add = joi.object({
    name: joi.string()
        .min(1)
        .max(200)
        .label("name")
        .messages({ 'string.min': 'wrong name' })
        .required()
    ,
    employeeNumber: joi.string()
        .min(1)
        .max(50)
        .pattern(/[0-9]/)
        .label("employee number")
        .messages({ 'string.min': 'wrong employee number' })
        .required()
    ,

});

const user_register_request_edit = joi.object({
    id: joi.number()
        .integer()
        .label("id")
        .messages({ 'number.base': 'wrong id' })
        .required()
    ,
    name: joi.string()
        .min(1)
        .max(200)
        .label("name")
        .messages({ 'string.min': 'wrong name' })
        .required()
    ,
    employeeNumber: joi.string()
        .min(1)
        .max(50)
        .pattern(/[0-9]/)
        .label("employee number")
        .messages({ 'string.min': 'wrong employee number' })
        .required()
    ,
});

const user_register_request_list = joi.object({

});

const user_register_request_view = joi.object({
    id: joi.number()
        .integer()
        .label("id")
        .messages({ 'number.base': 'wrong id' })
        .required()
    ,

});

const user_register_request_delete = joi.object({
    id: joi.number()
        .integer()
        .label("id")
        .messages({ 'number.base': 'wrong id' })
        .required()
    ,

});
const user_register_request_accept = joi.object({
    id: joi.number()
        .integer()
        .label("id")
        .messages({ 'number.base': 'wrong id' })
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
    password: joi.string()
        .min(1)
        .max(150)
        .label("password")
        .messages({ 'string.min': 'wrong password' })
        .required()
    ,


});

export default {
    user_register_request_accept,
    user_register_request_add,
    user_register_request_edit,
    user_register_request_list,
    user_register_request_view,
    user_register_request_delete,
}


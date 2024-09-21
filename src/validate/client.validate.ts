import joi from "joi";
import { xssPrevent, validatePhoneNumber, isValidDateString, isValidTimeString } from "../utils/commonValidation";



const client_add = joi.object({

    name: joi.string()
        .min(1)
        .max(100)
        .label("name")
        .messages({ 'string.min': 'wrong name' })
        .required()
    ,
    contactNumber: joi.string()
        .min(1)
        .max(20)
        .pattern(/[0-9]/)
        .label("contact number")
        .messages({ 'string.min': 'wrong contact number' })
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
    pocName: joi.string()
        .min(1)
        .max(200)
        .label("poc name")
        .messages({ 'string.min': 'wrong poc name' })
        .required()
    ,
    pocContactNumber: joi.string()
        .min(1)
        .max(20)
        .pattern(/[0-9]/)
        .label("poc contact number")
        .messages({ 'string.min': 'wrong poc contact number' })
        .required()
    ,
    headOfficeAddress: joi.string()
        .min(1)
        .max(200)
        .label("head office address")
        .messages({ 'string.min': 'wrong head office address' })
        .required()
    ,
    logo: joi.string()
        .min(1)
        .max(300)
        .label("logo")
        .messages({ 'string.min': 'wrong logo' })
        .allow(null)
        .required()
    ,

});

const client_edit = joi.object({
    id: joi.number()
        .integer()
        .label("client id")
        .messages({ 'number.base': 'wrong client id' })
        .required()
    ,
    name: joi.string()
        .min(1)
        .max(100)
        .label("name")
        .messages({ 'string.min': 'wrong name' })
        .required()
    ,
    contactNumber: joi.string()
        .min(1)
        .max(20)
        .pattern(/[0-9]/)
        .label("contact number")
        .messages({ 'string.min': 'wrong contact number' })
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
    pocName: joi.string()
        .min(1)
        .max(200)
        .label("poc name")
        .messages({ 'string.min': 'wrong poc name' })
        .required()
    ,
    pocContactNumber: joi.string()
        .min(1)
        .max(20)
        .pattern(/[0-9]/)
        .label("poc contact number")
        .messages({ 'string.min': 'wrong poc contact number' })
        .required()
    ,
    headOfficeAddress: joi.string()
        .min(1)
        .max(200)
        .label("head office address")
        .messages({ 'string.min': 'wrong head office address' })
        .required()
    ,
    logo: joi.string()
        .min(1)
        .max(300)
        .label("logo")
        .messages({ 'string.min': 'wrong logo' })
        .allow(null)
        .required()
    ,

});

const client_list = joi.object({

});

const client_view = joi.object({
    id: joi.number()
        .integer()
        .label("client id")
        .messages({ 'number.base': 'wrong client id' })
        .required()
    ,

});

const client_delete = joi.object({
    id: joi.number()
        .integer()
        .label("client id")
        .messages({ 'number.base': 'wrong client id' })
        .required()
    ,

});

export default {
    client_add,
    client_edit,
    client_list,
    client_view,
    client_delete,
}

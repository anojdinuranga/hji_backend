import joi from "joi";
import { xssPrevent, validatePhoneNumber, isValidDateString, isValidTimeString } from "../utils/commonValidation";

const enquiry_add = joi.object({
    client: joi.number()
        .integer()
        .label("client")
        .messages({ 'number.base': 'wrong client' })
        .allow(null)
        .required()
    ,
    type: joi.number()
        .integer()
        .label("type")
        .messages({ 'number.base': 'wrong type' })
        .allow(null)
        .required()
    ,
    file: joi.string()
        .min(1)
        .max(500)
        .label("file")
        .messages({ 'string.min': 'wrong file' })
        .allow(null)
        .required()
    ,
    developmentType: joi.number()
        .integer()
        .label("development type")
        .messages({ 'number.base': 'wrong development type' })
        .allow(null)
        .required()
    ,
    orderType: joi.number()
        .integer()
        .label("order type")
        .messages({ 'number.base': 'wrong order type' })
        .allow(null)
        .required()
    ,
    sampleType: joi.number()
        .integer()
        .label("sample type")
        .messages({ 'number.base': 'wrong sample type' })
        .allow(null)
        .required()
    ,
    file2: joi.string()
        .min(1)
        .max(500)
        .label("file 2")
        .messages({ 'string.min': 'wrong file2' })
        .allow(null)
        .required()
    ,
});

const enquiry_edit = joi.object({
    id: joi.number()
        .integer()
        .label("id")
        .messages({ 'number.base': 'wrong id' })
        .required()
    ,
    client: joi.number()
        .integer()
        .label("client")
        .messages({ 'number.base': 'wrong client' })
        .allow(null)
        .required()
    ,
    type: joi.number()
        .integer()
        .label("type")
        .messages({ 'number.base': 'wrong type' })
        .allow(null)
        .required()
    ,
    file: joi.string()
        .min(1)
        .max(500)
        .label("file")
        .messages({ 'string.min': 'wrong file' })
        .allow(null)
        .required()
    ,
    developmentType: joi.number()
        .integer()
        .label("development type")
        .messages({ 'number.base': 'wrong development type' })
        .allow(null)
        .required()
    ,
    orderType: joi.number()
        .integer()
        .label("order type")
        .messages({ 'number.base': 'wrong order type' })
        .allow(null)
        .required()
    ,
    sampleType: joi.number()
        .integer()
        .label("sample type")
        .messages({ 'number.base': 'wrong sample type' })
        .allow(null)
        .required()
    ,
    file2: joi.string()
        .min(1)
        .max(500)
        .label("file")
        .messages({ 'string.min': 'wrong file2' })
        .allow(null)
        .required()
    ,
});

const enquiry_list = joi.object({

});

const enquiry_view = joi.object({
    id: joi.number()
        .integer()
        .label("enquiry id")
        .messages({ 'number.base': 'wrong enquiry id' })
        .required()
    ,
});

const enquiry_delete = joi.object({
    id: joi.number()
        .integer()
        .label("enquiry id")
        .messages({ 'number.base': 'wrong enquiry id' })
        .required()
    ,
});

export default {
    enquiry_add,
    enquiry_edit,
    enquiry_list,
    enquiry_view,
    enquiry_delete
}

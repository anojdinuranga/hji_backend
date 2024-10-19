import joi from "joi";
import { xssPrevent, validatePhoneNumber, isValidDateString, isValidTimeString } from "../utils/commonValidation";

const enquiry_data_add = joi.object({
    enquiryId: joi.number()
        .integer()
        .label("enquiry id")
        .messages({ 'number.base': 'wrong enquiry id' })
        .required()
    ,
    enquiryAccessoriesFabrics: joi.array()
        .items(joi.object({
            knitStructure: joi.string()
                .min(1)
                .max(100)
                .label("knit structure")
                .messages({ 'string.min': 'wrong knit structure' })
                .required()
            ,
            blend: joi.string()
                .min(1)
                .max(100)
                .label("blend")
                .messages({ 'string.min': 'wrong blend' })
                .required()
            ,
            gsm: joi.number()
                .integer()
                .label("gsm")
                .messages({ 'number.base': 'wrong gsm' })
                .required()
            ,
            placement: joi.string()
                .min(1)
                .max(100)
                .label("placement")
                .messages({ 'string.min': 'wrong placement' })
                .required()
            ,
        }))
        .label("enquiry accessories fabrics")
        .messages({ 'array.min': 'wrong enquiry accessories fabrics' })
        .required()
    ,
    enquiryMainFabrics: joi.array()
        .items(joi.object({
            knitStructure: joi.string()
                .min(1)
                .max(100)
                .label("knit structure")
                .messages({ 'string.min': 'wrong knit structure' })
                .required()
            ,
            blend: joi.string()
                .min(1)
                .max(100)
                .label("blend")
                .messages({ 'string.min': 'wrong blend' })
                .required()
            ,
            gsm: joi.number()
                .integer()
                .label("gsm")
                .messages({ 'number.base': 'wrong gsm' })
                .required()
            ,
            finish: joi.string()
                .min(1)
                .max(100)
                .label("finish")
                .messages({ 'string.min': 'wrong finish' })
                .required()
            ,
            dryMethod: joi.string()
                .min(1)
                .max(100)
                .label("dry method")
                .messages({ 'string.min': 'wrong dry method' })
                .required()
            ,
            placement: joi.string()
                .min(1)
                .max(100)
                .label("placement")
                .messages({ 'string.min': 'wrong placement' })
                .required()
            ,
        }))
        .label("enquiry main fabrics")
        .messages({ 'array.min': 'wrong enquiry main fabrics' })
        .required()
    ,
    enquirySpecSheets: joi.array()
        .items(joi.object({
            pointOfMeasure: joi.string()
                .min(1)
                .max(200)
                .label("point of measure")
                .messages({ 'string.min': 'wrong point of measure' })
                .required()
            ,
            code: joi.string()
                .min(1)
                .max(100)
                .label("code")
                .messages({ 'string.min': 'wrong code' })
                .required()
            ,
            howToMeasure: joi.string()
                .min(1)
                .max(200)
                .label("how to measure")
                .messages({ 'string.min': 'wrong how to measure' })
                .required()
            ,
            critical: joi.number()
                .integer()
                .label("critical")
                .messages({ 'number.base': 'wrong critical' })
                .required()
            ,
            type: joi.number()
                .integer()
                .label("type")
                .messages({ 'number.base': 'wrong type' })
                .required()
            ,
            tolerance: joi.number()
                .min(0)
                .label("tolerance")
                .messages({ 'number.base': 'wrong tolerance' })
                .required()
            ,
            s: joi.number()
                .min(0)
                .label("s")
                .messages({ 'number.base': 'wrong s' })
                .required()
            ,
            m: joi.number()
                .min(0)
                .label("m")
                .messages({ 'number.base': 'wrong m' })
                .required()
            ,
            l: joi.number()
                .min(0)
                .label("l")
                .messages({ 'number.base': 'wrong l' })
                .required()
            ,
            xl: joi.number()
                .min(0)
                .label("xl")
                .messages({ 'number.base': 'wrong xl' })
                .required()
            ,
        }))
        .label("enquiry spec sheets")
        .messages({ 'array.min': 'wrong enquiry spec sheets' })
        .required()
    ,
    enquiryTrims: joi.array()
        .items(joi.object({
            type: joi.number()
                .integer()
                .label("type")
                .messages({ 'number.base': 'wrong type' })
                .required()
            ,
            description: joi.string()
                .min(1)
                .max(100)
                .label("description")
                .messages({ 'string.min': 'wrong description' })
                .required()
            ,
            content: joi.string()
                .min(1)
                .max(100)
                .label("content")
                .messages({ 'string.min': 'wrong content' })
                .required()
                .allow("")
            ,
            placement: joi.string()
                .min(1)
                .max(100)
                .label("placement")
                .messages({ 'string.min': 'wrong placement' })
                .required()
            ,
        }))
        .label("enquiry trims")
        .messages({ 'array.min': 'wrong enquiry trims' })
        .required()
    ,
    enquiryCombo: joi.array()
        .items(joi.object({
            comboNo: joi.string()
                .min(1)
                .max(10)
                .label("comboNo")
                .messages({ 'number.base': 'wrong comboNo' })
                .required()
            ,
            size: joi.string()
                .min(1)
                .max(10)
                .label("size")
                .messages({ 'string.min': 'wrong size' })
                .required()
            ,
            pieces: joi.string()
                .min(1)
                .max(10)
                .label("pieces")
                .messages({ 'string.min': 'wrong pieces' })
                .required()
            ,
        }))
        .label("enquiry combo")
        .messages({ 'array.min': 'wrong enquiry combo' })
        .required()
    ,
    values: joi.array()
        .items(joi.string()
            .min(1)
            .max(100)
            .label("value")
            .messages({ 'string.min': 'wrong value' })
            .required()
        )
        .label("values")
        .messages({ 'array.min': 'wrong values' })
        .required()
    ,
});

const enquiry_data_edit = joi.object({
    enquiryId: joi.number()
        .integer()
        .label("enquiry id")
        .messages({ 'number.base': 'wrong enquiry id' })
        .required()
    ,
    enquiryAccessoriesFabrics: joi.array()
        .items(joi.object({
            knitStructure: joi.string()
                .min(1)
                .max(100)
                .label("knit structure")
                .messages({ 'string.min': 'wrong knit structure' })
                .required()
            ,
            blend: joi.string()
                .min(1)
                .max(100)
                .label("blend")
                .messages({ 'string.min': 'wrong blend' })
                .required()
            ,
            gsm: joi.number()
                .integer()
                .label("gsm")
                .messages({ 'number.base': 'wrong gsm' })
                .required()
            ,
            placement: joi.string()
                .min(1)
                .max(100)
                .label("placement")
                .messages({ 'string.min': 'wrong placement' })
                .required()
            ,
        }))
        .label("enquiry accessories fabrics")
        .messages({ 'array.min': 'wrong enquiry accessories fabrics' })
        .required()
    ,
    enquiryMainFabrics: joi.array()
        .items(joi.object({
            knitStructure: joi.string()
                .min(1)
                .max(100)
                .label("knit structure")
                .messages({ 'string.min': 'wrong knit structure' })
                .required()
            ,
            blend: joi.string()
                .min(1)
                .max(100)
                .label("blend")
                .messages({ 'string.min': 'wrong blend' })
                .required()
            ,
            gsm: joi.number()
                .integer()
                .label("gsm")
                .messages({ 'number.base': 'wrong gsm' })
                .required()
            ,
            finish: joi.string()
                .min(1)
                .max(100)
                .label("finish")
                .messages({ 'string.min': 'wrong finish' })
                .required()
            ,
            dryMethod: joi.string()
                .min(1)
                .max(100)
                .label("dry method")
                .messages({ 'string.min': 'wrong dry method' })
                .required()
            ,
            placement: joi.string()
                .min(1)
                .max(100)
                .label("placement")
                .messages({ 'string.min': 'wrong placement' })
                .required()
            ,
        }))
        .label("enquiry main fabrics")
        .messages({ 'array.min': 'wrong enquiry main fabrics' })
        .required()
    ,
    enquirySpecSheets: joi.array()
        .items(joi.object({
            pointOfMeasure: joi.string()
                .min(1)
                .max(200)
                .label("point of measure")
                .messages({ 'string.min': 'wrong point of measure' })
                .required()
            ,
            code: joi.string()
                .min(1)
                .max(100)
                .label("code")
                .messages({ 'string.min': 'wrong code' })
                .required()
            ,
            howToMeasure: joi.string()
                .min(1)
                .max(200)
                .label("how to measure")
                .messages({ 'string.min': 'wrong how to measure' })
                .required()
            ,
            critical: joi.number()
                .integer()
                .label("critical")
                .messages({ 'number.base': 'wrong critical' })
                .required()
            ,
            type: joi.number()
                .integer()
                .label("type")
                .messages({ 'number.base': 'wrong type' })
                .required()
            ,
            tolerance: joi.number()
                .min(0)
                .label("tolerance")
                .messages({ 'number.base': 'wrong tolerance' })
                .required()
            ,
            s: joi.number()
                .min(0)
                .label("s")
                .messages({ 'number.base': 'wrong s' })
                .required()
            ,
        }))
        .label("enquiry spec sheets")
        .messages({ 'array.min': 'wrong enquiry spec sheets' })
        .required()
    ,
    enquiryTrims: joi.array()
        .items(joi.object({
            type: joi.number()
                .integer()
                .label("type")
                .messages({ 'number.base': 'wrong type' })
                .required()
            ,
            description: joi.string()
                .min(1)
                .max(100)
                .label("description")
                .messages({ 'string.min': 'wrong description' })
                .required()
            ,
            content: joi.string()
                .min(1)
                .max(100)
                .label("content")
                .messages({ 'string.min': 'wrong content' })
                .required()
            ,
            placement: joi.string()
                .min(1)
                .max(100)
                .label("placement")
                .messages({ 'string.min': 'wrong placement' })
                .required()
            ,
        }))
        .label("enquiry trims")
        .messages({ 'array.min': 'wrong enquiry trims' })
        .required()
    ,
});
const enquiry_data_list = joi.object({
});

const enquiry_data_view = joi.object({
    enquiryId: joi.number()
        .integer()
        .label("enquiry id")
        .messages({ 'number.base': 'wrong enquiry id' })
        .required()
    ,
});

const enquiry_data_delete = joi.object({
    enquiryId: joi.number()
        .integer()
        .label("enquiry id")
        .messages({ 'number.base': 'wrong enquiry id' })
        .required()
    ,
});

export default {
    enquiry_data_add,
    enquiry_data_edit,
    enquiry_data_list,
    enquiry_data_view,
    enquiry_data_delete
}

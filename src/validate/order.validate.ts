import joi from "joi";
import { xssPrevent, validatePhoneNumber, isValidDateString, isValidTimeString } from "../utils/commonValidation";

const order_add = joi.object({
    crNumber: joi.string()
        .min(1)
        .max(50)
        .label("cr number")
        .messages({ 'string.min': 'wrong cr number' })
        .required()
    ,
    buyerId: joi.number()
        .integer()
        .label("buyer id")
        .messages({ 'number.base': 'wrong buyer id' })
        .required()
    ,
    enquiryDate: joi.date()
        .iso()
        .label("enquiry date")
        .messages({ 'date.base': 'wrong enquiry date' })
        .required()
    ,
    styleNo: joi.string()
        .min(1)
        .max(100)
        .label("style no")
        .messages({ 'string.min': 'wrong style no' })
        .required()
    ,
    image: joi.string()
        .min(1)
        .max(300)
        .label("image")
        .messages({ 'string.min': 'wrong image' })
        .allow(null)
        .required()
    ,
    fabricBlend: joi.string()
        .min(1)
        .max(255)
        .label("fabric blend")
        .messages({ 'string.min': 'wrong fabric blend' })
        .required()
    ,
    comboNo: joi.string()
        .min(1)
        .max(100)
        .label("combo no")
        .messages({ 'string.min': 'wrong combo no' })
        .required()
    ,
    valueAddedProcess: joi.string()
        .valid('yes', 'no')
        .label("value added process")
        .messages({ 'string.valid': 'wrong value added process' })
        .required()
    ,
    projectedQtyPieces: joi.number()
        .integer()
        .label("projected qty pieces")
        .messages({ 'number.base': 'wrong projected qty pieces' })
        .required()
    ,
    samPerPiece: joi.number()
        .precision(2)
        .label("sam per piece")
        .messages({ 'number.base': 'wrong sam per piece' })
        .required()
    ,
    lapdipNo: joi.string()
        .min(1)
        .max(100)
        .label("lapdip no")
        .messages({ 'string.min': 'wrong lapdip no' })
        .required()
    ,
    expectedOrderPlacementDate: joi.date()
        .iso()
        .label("expected order placement date")
        .messages({ 'date.base': 'wrong expected order placement date' })
        .required()
    ,
    quotedPrice: joi.number()
        .precision(2)
        .label("quoted price")
        .messages({ 'number.base': 'wrong quoted price' })
        .required()
    ,
    fabricPrice: joi.number()
        .precision(2)
        .label("fabric price")
        .messages({ 'number.base': 'wrong fabric price' })
        .required()
    ,
    fabricConsumption: joi.number()
        .precision(2)
        .label("fabric consumption")
        .messages({ 'number.base': 'wrong fabric consumption' })
        .required()
    ,
    yarnPrice: joi.number()
        .precision(2)
        .label("yarn price")
        .messages({ 'number.base': 'wrong yarn price' })
        .required()
    ,
    lapdipCost: joi.number()
        .precision(2)
        .label("lapdip cost")
        .messages({ 'number.base': 'wrong lapdip cost' })
        .required()
    ,
    trimCost: joi.number()
        .precision(2)
        .label("trim cost")
        .messages({ 'number.base': 'wrong trim cost' })
        .required()
    ,
    techPack: joi.string()
        .min(1)
        .max(300)
        .label("tech pack")
        .messages({ 'string.min': 'wrong tech pack' })
        .allow(null)
        .required()
    ,
    gsm: joi.number()
        .precision(2)
        .label("gsm")
        .messages({ 'number.base': 'wrong gsm' })
        .required()
    ,
});

const order_edit = joi.object({
    id: joi.number()
        .integer()
        .label("order id")
        .messages({ 'number.base': 'wrong order id' })
        .required()
    ,
    crNumber: joi.string()
        .min(1)
        .max(50)
        .label("cr number")
        .messages({ 'string.min': 'wrong cr number' })
        .required()
    ,
    buyerId: joi.number()
        .integer()
        .label("buyer id")
        .messages({ 'number.base': 'wrong buyer id' })
        .required()
    ,
    enquiryDate: joi.date()
        .iso()
        .label("enquiry date")
        .messages({ 'date.base': 'wrong enquiry date' })
        .required()
    ,
    styleNo: joi.string()
        .min(1)
        .max(100)
        .label("style no")
        .messages({ 'string.min': 'wrong style no' })
        .required()
    ,
    image: joi.string()
        .min(1)
        .max(300)
        .label("image")
        .messages({ 'string.min': 'wrong image' })
        .allow(null)
        .required()
    ,
    fabricBlend: joi.string()
        .min(1)
        .max(255)
        .label("fabric blend")
        .messages({ 'string.min': 'wrong fabric blend' })
        .required()
    ,
    comboNo: joi.string()
        .min(1)
        .max(100)
        .label("combo no")
        .messages({ 'string.min': 'wrong combo no' })
        .required()
    ,
    valueAddedProcess: joi.string()
        .valid('yes', 'no')
        .label("value added process")
        .messages({ 'string.valid': 'wrong value added process' })
        .required()
    ,
    projectedQtyPieces: joi.number()
        .integer()
        .label("projected qty pieces")
        .messages({ 'number.base': 'wrong projected qty pieces' })
        .required()
    ,
    samPerPiece: joi.number()
        .precision(2)
        .label("sam per piece")
        .messages({ 'number.base': 'wrong sam per piece' })
        .required()
    ,
    lapdipNo: joi.string()
        .min(1)
        .max(100)
        .label("lapdip no")
        .messages({ 'string.min': 'wrong lapdip no' })
        .required()
    ,
    expectedOrderPlacementDate: joi.date()
        .iso()
        .label("expected order placement date")
        .messages({ 'date.base': 'wrong expected order placement date' })
        .required()
    ,
    quotedPrice: joi.number()
        .precision(2)
        .label("quoted price")
        .messages({ 'number.base': 'wrong quoted price' })
        .required()
    ,
    fabricPrice: joi.number()
        .precision(2)
        .label("fabric price")
        .messages({ 'number.base': 'wrong fabric price' })
        .required()
    ,
    fabricConsumption: joi.number()
        .precision(2)
        .label("fabric consumption")
        .messages({ 'number.base': 'wrong fabric consumption' })
        .required()
    ,
    yarnPrice: joi.number()
        .precision(2)
        .label("yarn price")
        .messages({ 'number.base': 'wrong yarn price' })
        .required()
    ,
    lapdipCost: joi.number()
        .precision(2)
        .label("lapdip cost")
        .messages({ 'number.base': 'wrong lapdip cost' })
        .required()
    ,
    trimCost: joi.number()
        .precision(2)
        .label("trim cost")
        .messages({ 'number.base': 'wrong trim cost' })
        .required()
    ,
    techPack: joi.string()
        .min(1)
        .max(300)
        .label("tech pack")
        .messages({ 'string.min': 'wrong tech pack' })
        .allow(null)
        .required()
    ,
    gsm: joi.number()
        .precision(2)
        .label("gsm")
        .messages({ 'number.base': 'wrong gsm' })
        .required()
    ,
});

const order_list = joi.object({

});

const order_view = joi.object({
    id: joi.number()
        .integer()
        .label("order id")
        .messages({ 'number.base': 'wrong order id' })
        .required()
    ,
});

const order_delete = joi.object({
    id: joi.number()
        .integer()
        .label("order id")
        .messages({ 'number.base': 'wrong order id' })
        .required()
    ,
});

export default {
    order_add,
    order_edit,
    order_list,
    order_view,
    order_delete
}

import orderModel from "../models/order.model";
import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {order_add_data,
        order_edit_data,
        order_list_data,
        order_view_data,
        order_delete_data
    } from "../config/types/order";


const order_add = async ( data: order_add_data ) =>{

    try {

        let result;
        result = await orderModel.order_add( data.crNumber, data.buyerId, data.enquiryDate, data.styleNo, data.image, data.fabricBlend, data.comboNo, data.valueAddedProcess, data.projectedQtyPieces, data.samPerPiece, data.lapdipNo, data.expectedOrderPlacementDate, data.quotedPrice, data.fabricPrice, data.fabricConsumption, data.yarnPrice, data.lapdipCost, data.trimCost, data.techPack, data.gsm, data.authUserId);
        if(!result.status) {
            return result;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const order_edit = async ( data: order_edit_data ) =>{

    try {

        let result;
        result = await orderModel.order_edit( data.id, data.crNumber, data.buyerId, data.enquiryDate, data.styleNo, data.image, data.fabricBlend, data.comboNo, data.valueAddedProcess, data.projectedQtyPieces, data.samPerPiece, data.lapdipNo, data.expectedOrderPlacementDate, data.quotedPrice, data.fabricPrice, data.fabricConsumption, data.yarnPrice, data.lapdipCost, data.trimCost, data.techPack, data.gsm, data.authUserId);
        if(!result.status) {
            return result;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const order_view = async ( data: order_view_data ) =>{

    try {

        let result;
        result = await orderModel.order_view( data.id );
        if(!result.status) {
            return result;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const order_list = async (data:order_list_data) =>{

    try {

        let result;
        result = await orderModel.order_list();
        if(!result.status) {
            return result;
        }
        return result;

    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};

const order_delete = async ( data:order_delete_data ) =>{

    try {

        let result;
        result = await orderModel.order_delete( data.id );
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
    order_add,
    order_edit,
    order_view,
    order_list,
    order_delete,
}


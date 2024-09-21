import bcrypt from "bcrypt";
import config from './../config/config';
import jwt from 'jsonwebtoken';
import db from "../config/db";
import logger from '../config/logger';
import DefaultResponse from "../utils/DefaultResponse";
import { DateTime } from 'luxon';




const order_add = async (crNumber: string, buyerId: number, enquiryDate: string, styleNo: string, image: string|null, fabricBlend: string, comboNo: string, valueAddedProcess: string, projectedQtyPieces: number, samPerPiece: number, lapdipNo: string, expectedOrderPlacementDate: string, quotedPrice: number, fabricPrice: number, fabricConsumption: number, yarnPrice: number, lapdipCost: number, trimCost: number, techPack: string | null, gsm: number, authUserId: number) => {

    try {

        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");

        let result = await db.query(`
            INSERT INTO 
                customer_order (cr_number, buyer_id, enquiry_date, style_no, image, fabric_blend, combo_no, value_added_process, projected_qty_pieces, sam_per_piece, lapdip_no, expected_order_placement_date, quoted_price, fabric_price, fabric_consumption, yarn_price, lapdip_cost, trim_cost, tech_pack, gsm, status, added_by, added_time) 
            VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
            crNumber, buyerId, enquiryDate, styleNo, image, fabricBlend, comboNo, valueAddedProcess, projectedQtyPieces, samPerPiece, lapdipNo, expectedOrderPlacementDate, quotedPrice, fabricPrice, fabricConsumption, yarnPrice, lapdipCost, trimCost, techPack, gsm, 1, authUserId, currentDateTime
        ]);

        if (result.status) {
            return DefaultResponse.successFormat("200", {
                orderId: result.data.insertId
            });
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const order_list = async () =>{

    try {

        let result = await db.query(`
            SELECT 
                customer_order.id, 
                customer_order.cr_number, 
                customer_order.buyer_id, 
                client.name AS buyer_name, 
                customer_order.enquiry_date, 
                customer_order.style_no, 
                customer_order.image, 
                customer_order.fabric_blend, 
                customer_order.combo_no, 
                customer_order.value_added_process, 
                customer_order.projected_qty_pieces, 
                customer_order.sam_per_piece, 
                customer_order.lapdip_no, 
                customer_order.expected_order_placement_date, 
                customer_order.quoted_price, 
                customer_order.fabric_price, 
                customer_order.fabric_consumption, 
                customer_order.yarn_price, 
                customer_order.lapdip_cost, 
                customer_order.trim_cost, 
                customer_order.tech_pack, 
                customer_order.gsm, 
                customer_order.status,
                status.name AS status_name,
                customer_order.updated_by,
                customer_order.updated_time,
                customer_order.added_by,
                customer_order.added_time,
                user_add.name AS added_by_name,
                user_update.name AS updated_by_name
            FROM customer_order
            LEFT JOIN client ON customer_order.buyer_id = client.id
            LEFT JOIN status ON customer_order.status = status.id    
            LEFT JOIN user user_add ON customer_order.added_by = user_add.id
            LEFT JOIN user user_update ON customer_order.updated_by = user_update.id
        `, []);

        if (result.status) {
            return DefaultResponse.successFormat("200", result.data);
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const order_view = async (orderId: number) =>{

    try {

        let result = await db.query(`
            SELECT 
                customer_order.id, 
                customer_order.cr_number, 
                customer_order.buyer_id, 
                client.name AS buyer_name, 
                customer_order.enquiry_date, 
                customer_order.style_no, 
                customer_order.image, 
                customer_order.fabric_blend, 
                customer_order.combo_no, 
                customer_order.value_added_process, 
                customer_order.projected_qty_pieces, 
                customer_order.sam_per_piece, 
                customer_order.lapdip_no, 
                customer_order.expected_order_placement_date, 
                customer_order.quoted_price, 
                customer_order.fabric_price, 
                customer_order.fabric_consumption, 
                customer_order.yarn_price, 
                customer_order.lapdip_cost, 
                customer_order.trim_cost, 
                customer_order.tech_pack, 
                customer_order.gsm, 
                customer_order.status,
                status.name AS status_name,
                customer_order.updated_by,
                customer_order.updated_time,
                customer_order.added_by,
                customer_order.added_time,
                user_add.name AS added_by_name,
                user_update.name AS updated_by_name
            FROM customer_order
            LEFT JOIN client ON customer_order.buyer_id = client.id
            LEFT JOIN status ON customer_order.status = status.id    
            LEFT JOIN user user_add ON customer_order.added_by = user_add.id
            LEFT JOIN user user_update ON customer_order.updated_by = user_update.id
            WHERE customer_order.id = ?
        `, [orderId]);

        if (result.status) {
            if (result.data.length === 0) {
                return DefaultResponse.errorFormat("404");
            }
            return DefaultResponse.successFormat("200", result.data[0]);
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const order_edit = async (orderId: number, crNumber: string, buyerId: number, enquiryDate: string, styleNo: string, image: string|null, fabricBlend: string, comboNo: string, valueAddedProcess: string, projectedQtyPieces: number, samPerPiece: number, lapdipNo: string, expectedOrderPlacementDate: string, quotedPrice: number, fabricPrice: number, fabricConsumption: number, yarnPrice: number, lapdipCost: number, trimCost: number, techPack: string | null, gsm: number, authUserId: number) => {

    try {
        const currentDateTime = DateTime.now().setZone("UTC").toFormat("y-MM-dd HH:mm:ss");

        let result = await db.query('UPDATE customer_order SET cr_number = ?, buyer_id = ?, enquiry_date = ?, style_no = ?, image = ?, fabric_blend = ?, combo_no = ?, value_added_process = ?, projected_qty_pieces = ?, sam_per_piece = ?, lapdip_no = ?, expected_order_placement_date = ?, quoted_price = ?, fabric_price = ?, fabric_consumption = ?, yarn_price = ?, lapdip_cost = ?, trim_cost = ?, tech_pack = ?, gsm = ?, updated_by = ?, updated_time = ? WHERE id = ?', [
            crNumber, buyerId, enquiryDate, styleNo, image, fabricBlend, comboNo, valueAddedProcess, projectedQtyPieces, samPerPiece, lapdipNo, expectedOrderPlacementDate, quotedPrice, fabricPrice, fabricConsumption, yarnPrice, lapdipCost, trimCost, techPack, gsm, authUserId, currentDateTime, orderId
        ]);

        if (result.status) {
            return DefaultResponse.successFormat("200");
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

const order_delete = async (orderId: number) =>{

    try {

        let result = await db.query('DELETE FROM customer_order WHERE id = ?', [orderId]);

        if (result.status) {
            return DefaultResponse.successFormat("200");
        }
        return result;

    } catch ( err ) {
        logger.error( err );
        return DefaultResponse.errorFormat("500");
    }
    
};

export default {
    order_add,
    order_edit,
    order_view,
    order_list,
    order_delete
}



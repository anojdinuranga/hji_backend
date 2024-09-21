import controller from '../../controllers/order.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();

router.post('/add', authenticate, controller.order_add);
router.post('/edit', authenticate, controller.order_edit);
router.post('/list', authenticate, controller.order_list);
router.post('/view', authenticate, controller.order_view);
router.post('/delete', authenticate, controller.order_delete);

export default router;

/**
 * @swagger
 * tags:
 *   name: order
 *   description: order management
 */

/**
 * @swagger
 * /order/add:
 *   post:
 *     summary: order
 *     description: order_add
 *     security:
 *       - bearerAuth: []
 *     tags: [order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               crNumber:
 *                 type: string
 *                 description: cr number
 *                 example: "example"
 *               buyerId:
 *                 type: number
 *                 description: buyer id
 *                 example: 1
 *               enquiryDate:
 *                 type: string
 *                 description: enquiry date
 *                 example: "2021-01-01"
 *               styleNo:
 *                 type: string
 *                 description: style number
 *                 example: "example"
 *               image:
 *                 type: string
 *                 description: image
 *                 example: null
 *               fabricBlend:
 *                 type: string
 *                 description: fabric blend
 *                 example: "example"
 *               comboNo:
 *                 type: string
 *                 description: combo number
 *                 example: "example"
 *               valueAddedProcess:
 *                 type: string
 *                 description: value added process
 *                 example: "yes"
 *               projectedQtyPieces:
 *                 type: number
 *                 description: projected quantity pieces
 *                 example: 1
 *               samPerPiece:
 *                 type: number
 *                 description: sam per piece
 *                 example: 1.00
 *               lapdipNo:
 *                 type: string
 *                 description: lapdip number
 *                 example: "example"
 *               expectedOrderPlacementDate:
 *                 type: string
 *                 description: expected order placement date
 *                 example: "2021-01-01"
 *               quotedPrice:
 *                 type: number
 *                 description: quoted price
 *                 example: 1.00
 *               fabricPrice:
 *                 type: number
 *                 description: fabric price
 *                 example: 1.00
 *               fabricConsumption:
 *                 type: number
 *                 description: fabric consumption
 *                 example: 1.00
 *               yarnPrice:
 *                 type: number
 *                 description: yarn price
 *                 example: 1.00
 *               lapdipCost:
 *                 type: number
 *                 description: lapdip cost
 *                 example: 1.00
 *               trimCost:
 *                 type: number
 *                 description: trim cost
 *                 example: 1.00
 *               techPack:
 *                 type: string
 *                 description: tech pack
 *                 example: null
 *               gsm:
 *                 type: number
 *                 description: gsm
 *                 example: 1.00
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /order/edit:
 *   post:
 *     summary: order
 *     description: order_edit
 *     security:
 *       - bearerAuth: []
 *     tags: [order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *                 description: id
 *                 example: 1
 *               crNumber:
 *                 type: string
 *                 description: cr number
 *                 example: "example"
 *               buyerId:
 *                 type: number
 *                 description: buyer id
 *                 example: 1
 *               enquiryDate:
 *                 type: string
 *                 description: enquiry date
 *                 example: "2021-01-01"
 *               styleNo:
 *                 type: string
 *                 description: style number
 *                 example: "example"
 *               image:
 *                 type: string
 *                 description: image
 *                 example: null
 *               fabricBlend:
 *                 type: string
 *                 description: fabric blend
 *                 example: "example"
 *               comboNo:
 *                 type: string
 *                 description: combo number
 *                 example: "example"
 *               valueAddedProcess:
 *                 type: string
 *                 description: value added process
 *                 example: "yes"
 *               projectedQtyPieces:
 *                 type: number
 *                 description: projected quantity pieces
 *                 example: 1
 *               samPerPiece:
 *                 type: number
 *                 description: sam per piece
 *                 example: 1.00
 *               lapdipNo:
 *                 type: string
 *                 description: lapdip number
 *                 example: "example"
 *               expectedOrderPlacementDate:
 *                 type: string
 *                 description: expected order placement date
 *                 example: "2021-01-01"
 *               quotedPrice:
 *                 type: number
 *                 description: quoted price
 *                 example: 1.00
 *               fabricPrice:
 *                 type: number
 *                 description: fabric price
 *                 example: 1.00
 *               fabricConsumption:
 *                 type: number
 *                 description: fabric consumption
 *                 example: 1.00
 *               yarnPrice:
 *                 type: number
 *                 description: yarn price
 *                 example: 1.00
 *               lapdipCost:
 *                 type: number
 *                 description: lapdip cost
 *                 example: 1.00
 *               trimCost:
 *                 type: number
 *                 description: trim cost
 *                 example: 1.00
 *               techPack:
 *                 type: string
 *                 description: tech pack
 *                 example: null
 *               gsm:
 *                 type: number
 *                 description: gsm
 *                 example: 1.00
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /order/delete:
 *   post:
 *     summary: order
 *     description: order_delete
 *     security:
 *       - bearerAuth: []
 *     tags: [order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *                 description: id
 *                 example: 1
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /order/view:
 *   post:
 *     summary: order
 *     description: order_view
 *     security:
 *       - bearerAuth: []
 *     tags: [order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *                 description: id
 *                 example: 1
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /order/list:
 *   post:
 *     summary: order
 *     description: order_list
 *     security:
 *       - bearerAuth: []
 *     tags: [order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *     responses:
 *       '200':
 *         description: Success
 */



import controller from '../../controllers/client.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();


router.post('/add', authenticate, controller.client_add);
router.post('/edit', authenticate, controller.client_edit);
router.post('/list', authenticate, controller.client_list);
router.post('/view', authenticate, controller.client_view);
router.post('/delete', authenticate, controller.client_delete);

export default router;

/**
 * @swagger
 * tags:
 *   name: client
 *   description: client management
 */


/**
 * @swagger
 * /client/add:
 *   post:
 *     summary: client
 *     description: client_add
 *     security:
 *       - bearerAuth: []
 *     tags: [client]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: name
 *                 example: "example"
 *               contactNumber:
 *                 type: string
 *                 description: contact number
 *                 example: "example"
 *               email:
 *                 type: string
 *                 description: email
 *                 example: "example@example.com"
 *               pocName:
 *                 type: string
 *                 description: poc name
 *                 example: "example"
 *               pocContactNumber:
 *                 type: string
 *                 description: poc contact number
 *                 example: "example"
 *               headOfficeAddress:
 *                 type: string
 *                 description: head office address
 *                 example: "example"
 *               logo:
 *                 type: string
 *                 description: logo
 *                 example: null
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /client/edit:
 *   post:
 *     summary: client
 *     description: client_edit
 *     security:
 *       - bearerAuth: []
 *     tags: [client]
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
 *               name:
 *                 type: string
 *                 description: name
 *                 example: "example"
 *               contactNumber:
 *                 type: string
 *                 description: contact number
 *                 example: "example"
 *               email:
 *                 type: string
 *                 description: email
 *                 example: "example@example.com"
 *               pocName:
 *                 type: string
 *                 description: poc name
 *                 example: "example"
 *               pocContactNumber:
 *                 type: string
 *                 description: poc contact number
 *                 example: "example"
 *               headOfficeAddress:
 *                 type: string
 *                 description: head office address
 *                 example: "example"
 *               logo:
 *                 type: string
 *                 description: logo
 *                 example: null
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /client/delete:
 *   post:
 *     summary: client
 *     description: client_delete
 *     security:
 *       - bearerAuth: []
 *     tags: [client]
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
 * /client/view:
 *   post:
 *     summary: client
 *     description: client_view
 *     security:
 *       - bearerAuth: []
 *     tags: [client]
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
 * /client/list:
 *   post:
 *     summary: client
 *     description: client_list
 *     security:
 *       - bearerAuth: []
 *     tags: [client]
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
import controller from '../../controllers/enquiry.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();

router.post('/add', authenticate, controller.enquiry_add);
router.post('/edit', authenticate, controller.enquiry_edit);
router.post('/list', authenticate, controller.enquiry_list);
router.post('/view', authenticate, controller.enquiry_view);
router.post('/delete', authenticate, controller.enquiry_delete);

export default router;

/**
 * @swagger
 * tags:
 *   name: enquiry
 *   description: enquiry management
 */

/**
 * @swagger
 * /enquiry/add:
 *   post:
 *     summary: enquiry
 *     description: enquiry_add
 *     security:
 *       - bearerAuth: []
 *     tags: [enquiry]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              client:
 *                type: integer
 *                description: client id
 *                example: 1
 *              type:
 *                type: integer
 *                description: type 
 *                example: 1
 *              file:
 *                type: string
 *                description: file (excel, csv, pdf)
 *                example: "example.xlsx"
 *              developmentType:
 *                type: integer
 *                description: development type
 *                example: 1
 *              orderType:
 *                type: integer
 *                description: order type 
 *                example: 1
 *              sampleType:
 *                type: integer
 *                description: sample type
 *                example: 1
 *              file2:
 *                type: string
 *                description: file (excel, csv, pdf)
 *                example: "example.xlsx"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /enquiry/edit:
 *   post:
 *     summary: enquiry
 *     description: enquiry_edit
 *     security:
 *       - bearerAuth: []
 *     tags: [enquiry]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              id:
 *                type: integer
 *                description: id
 *                example: 1
 *              client:
 *                type: integer
 *                description: client id
 *                example: 1
 *              type:
 *                type: integer
 *                description: type 
 *                example: 1
 *              file:
 *                type: string
 *                description: file (excel, csv, pdf)
 *                example: "example.xlsx"
 *              developmentType:
 *                type: integer
 *                description: development type
 *                example: 1
 *              orderType:
 *                type: integer
 *                description: order type 
 *                example: 1
 *              sampleType:
 *                type: integer
 *                description: sample type
 *                example: 1
 *              file2:
 *                type: string
 *                description: file (excel, csv, pdf)
 *                example: "example.xlsx"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /enquiry/delete:
 *   post:
 *     summary: enquiry
 *     description: enquiry_delete
 *     security:
 *       - bearerAuth: []
 *     tags: [enquiry]
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
 * /enquiry/view:
 *   post:
 *     summary: enquiry
 *     description: enquiry_view
 *     security:
 *       - bearerAuth: []
 *     tags: [enquiry]
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
 * /enquiry/list:
 *   post:
 *     summary: enquiry
 *     description: enquiry_list
 *     security:
 *       - bearerAuth: []
 *     tags: [enquiry]
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



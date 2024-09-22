import controller from '../../controllers/user_register_request.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();


router.post('/add', authenticate, controller.user_register_request_add);
router.post('/edit', authenticate, controller.user_register_request_edit);
router.post('/list', authenticate, controller.user_register_request_list);
router.post('/view', authenticate, controller.user_register_request_view);
router.post('/delete', authenticate, controller.user_register_request_delete);
router.post('/accept', authenticate, controller.user_register_request_accept);

export default router;

/**
 * @swagger
 * tags:
 *   name: user_register_request
 *   description: user_register_request management
 */

/**
 * @swagger
 * /user_register_request/add:
 *   post:
 *     summary: user_register_request
 *     description: user_register_request_add
 *     security:
 *       - bearerAuth: []
 *     tags: [user_register_request]
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
 *               employeeNumber:
 *                 type: string
 *                 description: employee number
 *                 example: "EMP0055"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /user_register_request/edit:
 *   post:
 *     summary: user_register_request
 *     description: user_register_request_edit
 *     security:
 *       - bearerAuth: []
 *     tags: [user_register_request]
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
 *               employeeNumber:
 *                 type: string
 *                 description: employee number
 *                 example: "EMP0050"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /user_register_request/delete:
 *   post:
 *     summary: user_register_request
 *     description: user_register_request_delete
 *     security:
 *       - bearerAuth: []
 *     tags: [user_register_request]
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
 * /user_register_request/view:
 *   post:
 *     summary: user_register_request
 *     description: user_register_request_view
 *     security:
 *       - bearerAuth: []
 *     tags: [user_register_request]
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
 * /user_register_request/accept:
 *   post:
 *     summary: user_register_request
 *     description: user_register_request_accept
 *     security:
 *       - bearerAuth: []
 *     tags: [user_register_request]
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
 *               email:
 *                 type: string
 *                 description: email
 *                 example: "example@example.com"
 *               mobile:
 *                 type: string
 *                 description: mobile
 *                 example: "example"
 *               password:
 *                 type: string
 *                 description: password
 *                 example: "example"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /user_register_request/list:
 *   post:
 *     summary: user_register_request
 *     description: user_register_request_list
 *     security:
 *       - bearerAuth: []
 *     tags: [user_register_request]
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

import controller from '../../controllers/user.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();

router.get('/check', authenticate, controller.user_check);
router.get('/logout', authenticate, controller.user_logout);
router.post('/login', controller.user_login);
router.post('/add', authenticate, controller.user_add);
router.post('/edit', authenticate, controller.user_edit);
router.post('/list', authenticate, controller.user_list);
router.post('/view', authenticate, controller.user_view);
router.post('/delete', authenticate, controller.user_delete);

export default router;

/**
 * @swagger
 * tags:
 *   name: user
 *   description: user management
 */

/**
 * @swagger
 * /user/add:
 *   post:
 *     summary: user
 *     description: user_add
 *     security:
 *       - bearerAuth: []
 *     tags: [user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               employeeNumber:
 *                 type: string
 *                 description: employee number
 *                 example: "example"
 *               name:
 *                 type: string
 *                 description: name
 *                 example: "example"
 *               password:
 *                 type: string
 *                 description: password
 *                 example: "example"
 *               email:
 *                 type: string
 *                 description: email
 *                 example: "example@example.com"
 *               mobile:
 *                 type: string
 *                 description: mobile
 *                 example: "example"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /user/edit:
 *   post:
 *     summary: user
 *     description: user_edit
 *     security:
 *       - bearerAuth: []
 *     tags: [user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: number
 *                 description: user id
 *                 example: 1
 *               employeeNumber:
 *                 type: string
 *                 description: employee number
 *                 example: "example"
 *               name:
 *                 type: string
 *                 description: name
 *                 example: "example"
 *               email:
 *                 type: string
 *                 description: email
 *                 example: "example@example.com"
 *               mobile:
 *                 type: string
 *                 description: mobile
 *                 example: "example"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /user/list:
 *   post:
 *     summary: user
 *     description: user_list
 *     security:
 *       - bearerAuth: []
 *     tags: [user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *         
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /user/view:
 *   post:
 *     summary: user
 *     description: user_view
 *     security:
 *       - bearerAuth: []
 *     tags: [user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: number
 *                 description: user id
 *                 example: 1
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /user/delete:
 *   post:
 *     summary: user
 *     description: user_delete
 *     security:
 *       - bearerAuth: []
 *     tags: [user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: number
 *                 description: user id
 *                 example: 1
 *     responses:
 *       '200':
 *         description: Success
 */


/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: user
 *     description: user_login
 *     tags: [user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               employeeNumber:
 *                 type: string
 *                 description: email
 *                 example: "emp123"
 *               password:
 *                 type: string
 *                 description: password
 *                 example: "123456"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /user/check:
 *   get:
 *     summary: user
 *     description: user_check
 *     tags: [user]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /user/logout:
 *   get:
 *     summary: user
 *     description: user_logout
 *     tags: [user]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Success
 */

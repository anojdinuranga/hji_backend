import controller from '../../controllers/department_designation.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();
router.post('/add', authenticate, controller.department_designation_add);
router.post('/edit', authenticate, controller.department_designation_edit);
router.get('/list', authenticate, controller.department_designation_list);
router.post('/view', authenticate, controller.department_designation_view);

export default router;

/**
 * @swagger
 * tags:
 *   name: department_designation
 *   description: department_designation management
 */

/**
 * @swagger
 * /department_designation/add:
 *   post:
 *     summary: department_designation
 *     description: department_designation_add
 *     tags: [department_designation]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               departmentId:
 *                 type: number
 *                 description: department id
 *                 example: "1"
 *               designation:
 *                 type: string
 *                 description: designation
 *                 example: "1"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /department_designation/edit:
 *   post:
 *     summary: department_designation
 *     description: department_designation_edit
 *     tags: [department_designation]
 *     security:
 *       - bearerAuth: []
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
 *                 example: "1"
 *               departmentId:
 *                 type: number
 *                 description: department id
 *                 example: "1"
 *               designation:
 *                 type: string
 *                 description: designation
 *                 example: "1"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /department_designation/list:
 *   get:
 *     summary: department_designation
 *     description: department_designation_list
 *     tags: [department_designation]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /department_designation/view:
 *   post:
 *     summary: department_designation
 *     description: department_designation_view
 *     tags: [department_designation]
 *     security:
 *       - bearerAuth: []
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
 *                 example: "1"
 *     responses:
 *       '200':
 *         description: Success
 */
    
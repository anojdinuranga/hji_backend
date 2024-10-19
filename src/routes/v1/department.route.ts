import controller from '../../controllers/department.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();
router.post('/add', authenticate, controller.department_add);
router.post('/edit', authenticate, controller.department_edit);
router.get('/list', authenticate, controller.department_list);
router.post('/view', authenticate, controller.department_view);
router.post('/delete', authenticate, controller.department_delete);

export default router;

/**
 * @swagger
 * tags:
 *   name: department
 *   description: department management
 */

/**
 * @swagger
 * /department/add:
 *   post:
 *     summary: department
 *     description: department_add
 *     tags: [department]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               departmentName:
 *                 type: string
 *                 description: department name
 *                 example: "example text"
 *               designations:
 *                 type: array
 *                 description: An array of designations associated with the department.
 *                 items:
 *                   type: string
 *                   example: "Manager"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /department/edit:
 *   post:
 *     summary: department
 *     description: department_edit
 *     tags: [department]
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
 *               departmentName:
 *                 type: string
 *                 description: department name
 *                 example: "example text"
 *               designations:
 *                 type: array
 *                 description: An array of designations associated with the department.
 *                 items:
 *                   type: string
 *                   example: "Manager"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /department/list:
 *   get:
 *     summary: department
 *     description: department_list
 *     tags: [department]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /department/view:
 *   post:
 *     summary: department
 *     description: department_view
 *     tags: [department]
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
/**
 * @swagger
 * /department/delete:
 *   post:
 *     summary: department
 *     description: department_delete
 *     security:
 *       - bearerAuth: []
 *     tags: [department]
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
 *                 example: 1
 *     responses:
 *       '200':
 *         description: Success
 */ 
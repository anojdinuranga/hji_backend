import controller from '../../controllers/enquiry_data.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();

router.post('/add', authenticate, controller.enquiry_data_add);
router.post('/edit', authenticate, controller.enquiry_data_edit);
router.post('/list', authenticate, controller.enquiry_data_list);
router.post('/view', authenticate, controller.enquiry_data_view);
router.post('/delete', authenticate, controller.enquiry_data_delete);

export default router;

/**
 * @swagger
 * tags:
 *   name: enquiry_data
 *   description: enquiry_data management
 */

/**
 * @swagger
 * /enquiry_data/add:
 *   post:
 *     summary: enquiry_data
 *     description: enquiry_data_add
 *     security:
 *       - bearerAuth: []
 *     tags: [enquiry_data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              enquiryId:
 *                type: integer
 *                description: enquiry id
 *                example: 1
 *              enquiryAccessoriesFabrics:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    knitStructure:
 *                      type: string
 *                      description: knit structure
 *                      example: "example"
 *                    blend:
 *                      type: string
 *                      description: blend
 *                      example: "example"
 *                    gsm:
 *                      type: integer
 *                      description: gsm
 *                      example: 1
 *                    placement:
 *                      type: string
 *                      description: placement
 *                      example: "example"
 *              enquiryMainFabrics:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    knitStructure:
 *                      type: string
 *                      description: knit structure
 *                      example: "example"
 *                    blend:
 *                      type: string
 *                      description: blend
 *                      example: "example"
 *                    gsm:
 *                      type: integer
 *                      description: gsm
 *                      example: 1
 *                    finish:
 *                      type: string
 *                      description: finish
 *                      example: "example"
 *                    dryMethod:
 *                      type: string
 *                      description: dry method
 *                      example: "example"
 *                    placement:
 *                      type: string
 *                      description: placement
 *                      example: "example"
 *              enquirySpecSheets:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    pointOfMeasure:
 *                      type: string
 *                      description: point of measure
 *                      example: "example"
 *                    code:
 *                      type: string
 *                      description: code
 *                      example: "example"
 *                    howToMeasure:
 *                      type: string
 *                      description: how to measure
 *                      example: "example"
 *                    critical:
 *                      type: integer
 *                      description: critical
 *                      example: 1
 *                    type:
 *                      type: integer
 *                      description: type
 *                      example: 1
 *                    tolerance:
 *                      type: number
 *                      description: tolerance
 *                      example: 1
 *                    s:
 *                      type: number
 *                      description: s
 *                      example: 1
 *                    m:
 *                      type: number
 *                      description: m
 *                      example: 1
 *                    l:
 *                      type: number
 *                      description: l
 *                      example: 1
 *                    xl:
 *                      type: number
 *                      description: xl
 *                      example: 1
 *              enquiryTrims:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    type:
 *                      type: integer
 *                      description: type
 *                      example: 1
 *                    description:
 *                      type: string
 *                      description: description
 *                      example: "example"
 *                    content:
 *                      type: string
 *                      description: content
 *                      example: "example"
 *                    placement:
 *                      type: string
 *                      description: placement
 *                      example: "example"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /enquiry_data/edit:
 *   post:
 *     summary: enquiry_data
 *     description: enquiry_data_edit
 *     security:
 *       - bearerAuth: []
 *     tags: [enquiry_data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              enquiryId:
 *                type: integer
 *                description: enquiry id
 *                example: 1
 *              enquiryAccessoriesFabrics:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    knitStructure:
 *                      type: string
 *                      description: knit structure
 *                      example: "example"
 *                    blend:
 *                      type: string
 *                      description: blend
 *                      example: "example"
 *                    gsm:
 *                      type: integer
 *                      description: gsm
 *                      example: 1
 *                    placement:
 *                      type: string
 *                      description: placement
 *                      example: "example"
 *              enquiryMainFabrics:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    knitStructure:
 *                      type: string
 *                      description: knit structure
 *                      example: "example"
 *                    blend:
 *                      type: string
 *                      description: blend
 *                      example: "example"
 *                    gsm:
 *                      type: integer
 *                      description: gsm
 *                      example: 1
 *                    finish:
 *                      type: string
 *                      description: finish
 *                      example: "example"
 *                    dryMethod:
 *                      type: string
 *                      description: dry method
 *                      example: "example"
 *                    placement:
 *                      type: string
 *                      description: placement
 *                      example: "example"
 *              enquirySpecSheets:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    pointOfMeasure:
 *                      type: string
 *                      description: point of measure
 *                      example: "example"
 *                    code:
 *                      type: string
 *                      description: code
 *                      example: "example"
 *                    howToMeasure:
 *                      type: string
 *                      description: how to measure
 *                      example: "example"
 *                    critical:
 *                      type: integer
 *                      description: critical
 *                      example: 1
 *                    type:
 *                      type: integer
 *                      description: type
 *                      example: 1
 *                    tolerance:
 *                      type: number
 *                      description: tolerance
 *                      example: 1
 *                    s:
 *                      type: number
 *                      description: s
 *                      example: 1
 *                    m:
 *                      type: number
 *                      description: m
 *                      example: 1
 *                    l:
 *                      type: number
 *                      description: l
 *                      example: 1
 *                    xl:
 *                      type: number
 *                      description: xl
 *                      example: 1
 *              enquiryTrims:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    type:
 *                      type: integer
 *                      description: type
 *                      example: 1
 *                    description:
 *                      type: string
 *                      description: description
 *                      example: "example"
 *                    content:
 *                      type: string
 *                      description: content
 *                      example: "example"
 *                    placement:
 *                      type: string
 *                      description: placement
 *                      example: "example"
 *     responses:
 *       '200':
 *         description: Success
 */

/**
 * @swagger
 * /enquiry_data/delete:
 *   post:
 *     summary: enquiry_data
 *     description: enquiry_data_delete
 *     security:
 *       - bearerAuth: []
 *     tags: [enquiry_data]
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
 * /enquiry_data/view:
 *   post:
 *     summary: enquiry_data
 *     description: enquiry_data_view
 *     security:
 *       - bearerAuth: []
 *     tags: [enquiry_data]
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
 * /enquiry_data/list:
 *   post:
 *     summary: enquiry_data
 *     description: enquiry_data_list
 *     security:
 *       - bearerAuth: []
 *     tags: [enquiry_data]
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



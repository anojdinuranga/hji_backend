import controller from '../../controllers/file.controller';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
import {singleFileUpload} from '../../middlewares/fileUpload';
const router: Router = express.Router();


router.post('/single', authenticate, singleFileUpload, controller.single_file_upload);

export default router;

/**
 * @swagger
 * tags:
 *   name: file
 *   description: file upload
 */


/**
 * @swagger
 * /file/single:
 *   post:
 *     summary: upload
 *     description: upload a single file
 *     security:
 *       - bearerAuth: []
 *     tags: [file]
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: Success
 */
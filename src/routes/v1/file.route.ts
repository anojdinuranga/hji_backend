import model from '../../models/file.model';
import express from 'express';
import { Router } from 'express';
import {authenticate} from '../../middlewares/authenticate';
const router: Router = express.Router();

router.post('/upload', authenticate, model.file_upload);

export default router;
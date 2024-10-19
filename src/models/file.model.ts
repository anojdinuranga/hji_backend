import db from '../config/db';
import DefaultResponse from '../utils/DefaultResponse';
import multer from 'multer';
import path from 'path';
import { Response } from 'express';
import { ExtendedRequest } from '../config/types';
import authorize from '../utils/authorize';
import logger from '../config/logger';
import { DateTime } from 'luxon';
import fs from 'fs';

const sample_validation = async (resultId: number, authUserId: number, authUserRole: number)=> {
    try {
        // let result  = await db.query("SELECT file_url FROM table WHERE id = ?", [resultId]);
        // if ( !result.status ) {
        //     logger.error(result);
        //     return DefaultResponse.errorFormat('500');
        // }
        // if ( result.data.length === 0 ) {
        //     return DefaultResponse.errorFormat('006');
        // }
        return DefaultResponse.successFormat('200', {
            old_file: 'img/file_1711867949648_zz03pv.jpg'
        });
    } catch(err) {
        logger.error(err);
        return DefaultResponse.errorFormat('500');
    }
}
const sample_update = async (file: string, resultId: number, authUserId: number, authUserRole: number)=> {
    try {
        // let result;
        // result  = await db.query('UPDATE table SET file_url = ? WHERE id = ?', [file, resultId]);
        // if ( !result.status ) {
        //     logger.error(result);
        //     return DefaultResponse.errorFormat('500');
        // }
        return DefaultResponse.successFormat('200');
    } catch(err) {
        logger.error(err);
        return DefaultResponse.errorFormat('500');
    }
}

const fileControl = {
    '0': {
        comment: 'sample',
        Allowed: /jpeg|jpg|png/,
        maxSize: 5120,
        access: [1],
        validationFunc: sample_validation,
        naming: 'auto',
        destination: 'images/',
        afterProcess: sample_update
    }
}

async function main_validation(file: Express.Multer.File, cb: (error: any, result: boolean) => void, req: ExtendedRequest) {
    try {
        // Authorization
        let authData = authorize('file', 'file_upload', req);
        if (!authData.status) {
            cb({ status: false, message: 'Forbidden' }, false);
            return;
        }
        let authUserId = authData.data.user;    // Authorized user id
        let authUserRole = authData.data.role;  // Authorized user role
        // Check if the fileId is existing
        if(!req.body.fileId) {
            cb({ status: false, message: 'file id is required' }, false);
            return;
        }
        // file Control validation
        if ( !fileControl[req.body.fileId as keyof typeof fileControl] ) {
            cb({ status: false, message: 'This file id does not exist' }, false);
            return;
        }

        let fileInfo = fileControl[req.body.fileId as keyof typeof fileControl];

        // Access check
        if(!fileInfo.access.includes(authUserRole)) {
            cb({ status: false, message: 'You have no access to upload this file' }, false);
            return;
        }
        // File extension validation
        const extValid = fileInfo.Allowed.test(path.extname(file.originalname).toLowerCase());
        if(!extValid) {
            cb({ status: false, message: 'This file type is not allowed' }, false);
            return;
        }
        // Check file size
        const maxSizeInBytes = fileInfo.maxSize * 1024;
        if (file.size > maxSizeInBytes) {
            cb({ status: false, message: 'File size exceeds the maximum limit' }, false);
            return;
        }
        // Check if the resultId is existing
        if(!req.body.resultId) {
            cb({ status: false, message: 'result id is required' }, false);
            return;
        }

        // Record Validation
        let validateResult = await fileInfo.validationFunc(req.body.resultId, authUserId, authUserRole);
        if(!validateResult.status) {
            cb({ status: false, message: validateResult.message }, false);
            return;
        }

        req.body.old_file = validateResult.data.old_file; // Old file
        req.body.naming = fileInfo.naming; // Naming
        req.body.destination = fileInfo.destination; // destination

        cb(null, true);

    } catch (err) {
        logger.error(err);
        cb({ status: false, message: 'Something went wrong' }, false);
        return;
    }
}

const file = multer({
    storage: multer.diskStorage({
        destination: (req: ExtendedRequest, file, cb) => {
            cb(null, 'src/public/'+req.body.destination);
        },
        
        filename: (req: ExtendedRequest, file, cb) => {
            const randomString = Math.random().toString(36).substring(7); // Generate random string
            const filename = (req.body.naming === 'auto') ? `${file.fieldname}_${Date.now()}_${randomString}${path.extname(file.originalname)}` : `${file.fieldname}_${file.originalname}`;
            cb(null, filename);
        }
    }),
    fileFilter: async function (
        _req: ExtendedRequest,
        file: Express.Multer.File,
        cb: (error: any, result: boolean) => void
    ) {
        await main_validation(file, cb, _req);
    },
}).single('file');

const file_upload    = async ( req: ExtendedRequest, res: Response ) => {

    try {
        file(req, res, async (err:any) => {

            try {
                // Check if file is set && if file has errors
                if ( req.file === undefined ) {
                    if ( err === undefined ) {
                        DefaultResponse.error(res, '017');
                        return;
                    } else {
                        logger.error(err)
                        DefaultResponse.error(res, '000', err.message);
                        return;
                    }
                }
        
                if (err instanceof multer.MulterError) {
                    if ( err.code === 'LIMIT_UNEXPECTED_FILE' ) {
                        DefaultResponse.error(res, '000', 'Unexpected field ' + err.field);
                        return;
                    }
                } else if (err) {
                    DefaultResponse.error(res, '018');
                    return;
                }
        
                try{
        
                    let authData = authorize('file', 'file_upload', req);
                    if (!authData.status) {
                        DefaultResponse.error(res, '403');
                        return;
                    }
                    const authUserId = authData.data.user;    // Authorized user id
                    const authUserRole = authData.data.role;  // Authorized user role
                    
                    const fileUploaded = '/uploads/files/'+req.file.filename; // Uploaded file url or path
                    const fileInfo = fileControl[req.body.fileId as keyof typeof fileControl]; // file info object

                    // Update functionality
                    let updateResponse = await fileInfo.afterProcess(fileUploaded, req.body.resultId, authUserId, authUserRole);
                    if(!updateResponse.status) {
                        logger.error(updateResponse);
                        DefaultResponse.error(res, '006');
                        // Delete the uploaded file
                        return;
                    }
                    // Remove if old file exists
                    if(req.body.old_file) {
                        await removeFileByNameAndPath('src/public/'+req.body.old_file);
                    }
                    // Response
                    DefaultResponse.success(res, '200', {
                        filename : fileUploaded
                    });
                    return;
                } catch (err){
                    logger.error(err); // :)3v
                    DefaultResponse.error(res, '500');
                    return;
                }
    
            } catch (err){
                logger.error(err); // :)3v
                DefaultResponse.error(res, '500');
                return;
            }
        
        });
    } catch (err) {
        logger.error(err);
        DefaultResponse.error(res, '500');
    }

}

const removeFileByNameAndPath = async (filePath: string) => {
    try {
        await fs.promises.unlink(filePath);
        return true;
    } catch (err) {
        logger.error(err);
        return false;
    }
}

export default {
    file_upload
}
import clientModel from "../models/client.model";
import DefaultResponse from "../utils/DefaultResponse";
import logger from '../config/logger';
import {
    } from "../config/types/client";


    
const single_file_upload = async ( data: any ) =>{

    try {
        console.log("🚀 ~ constsingle_file_upload= ~ data:", data)
        if(data.fileData.fileName == undefined || data.fileData.fileName == null){
            return DefaultResponse.errorFormat('000', 'file upload error');
        }
        return DefaultResponse.successFormat('000', {file:data.fileData.fileName});
    } catch (err) {
        logger.error(err);
        return DefaultResponse.errorFormat("500");
    }
};


export default {
    single_file_upload
}

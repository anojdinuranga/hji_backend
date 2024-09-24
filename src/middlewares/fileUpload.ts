import multer from 'multer';
import path from 'path';

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join('public', 'uploads'));
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop();
        const filename = `${Date.now()}${Math.random().toString(36).substring(2, 10)}.${ext}`;
        cb(null, filename);
    }
});

const fileFilter = (req:any, file:any, cb:any) => {
    const allowedTypes = [
        'image/jpeg',
        'image/png',
        'image/jpg',
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/msword',
        'application/vnd.ms-excel',
    ];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const fileUpload = multer({ storage: fileStorage, fileFilter: fileFilter }).single('file');

export const singleFileUpload = (req: any, res: any, next: any) => {
    fileUpload(req, res, (err: any) => {
        console.log("🚀 ~ singleFileUpload ~ req:", err)
        if (err) {
            res.status(400).send({ message: err });
            return;
        } else {
            if (req.file) {
                req.body.fileName = req.file.filename;
                req.body.filePath = req.file.path;
            }
            next();
        }
    });
};


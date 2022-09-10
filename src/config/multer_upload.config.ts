import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { diskStorage } from 'multer';
import path from 'path';
import { FileTypeError } from 'src/modules/product/exceptions/file_type.exception';
export const validImageUploadTypesRegex = /jpeg|jpg|png/;
export const maxImageUploadSize = 3 * 1024 * 1024; // 3MB
export const multerUploadConfig: MulterOptions = {
  storage: diskStorage({
    destination: './tmp',
    filename: (request, file, callback) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const fileName = `${uniqueSuffix}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),

  fileFilter: (request, file, callback) => {
    const mimetype = validImageUploadTypesRegex.test(file.mimetype);
    const extname = validImageUploadTypesRegex.test(
      path.extname(file.originalname).toLowerCase(),
    );

    if (mimetype && extname) {
      return callback(null, true);
    }

    return callback(new FileTypeError(validImageUploadTypesRegex), false);
  },

  limits: {
    fileSize: maxImageUploadSize,
  },
};

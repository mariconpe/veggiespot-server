import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaModule } from 'src/external/repositories/prisma/prisma.module';
import { MulterModule } from '@nestjs/platform-express';
import { multerUploadConfig } from 'src/config/multer_upload.config';

@Module({
  controllers: [ProductController],
  imports: [PrismaModule, MulterModule.register(multerUploadConfig)],
  providers: [ProductService],
})
export class ProductModule {}

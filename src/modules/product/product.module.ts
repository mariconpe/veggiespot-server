import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaModule } from 'src/external/repositories/prisma/prisma.module';

@Module({
  controllers: [ProductController],
  imports: [PrismaModule],
  providers: [ProductService],
})
export class ProductModule {}

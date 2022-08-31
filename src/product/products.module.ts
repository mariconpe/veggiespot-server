import { Module } from '@nestjs/common';
// import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsProviders } from './products.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [ProductsService, ...ProductsProviders],
})
export class ProductsModule {}

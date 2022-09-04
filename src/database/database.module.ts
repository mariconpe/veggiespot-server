import { Module } from '@nestjs/common';
import { ProductsProviders } from '../product/products.providers';
import { ProductsService } from '../product/products.service';
import { ProductsController } from '../product/products.controller';
import { databaseProviders } from '..';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ProductsController],
  providers: [...databaseProviders, ...ProductsProviders, ProductsService],
  exports: [...databaseProviders],
})
export class DatabaseModule {}

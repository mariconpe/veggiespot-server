import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get()
  search(): Promise<Product[]> {
    return this.productService.search();
  }

  @Get(':id')
  findOne(@Param() params): Promise<Product> {
    return this.productService.findOne(params.id);
  }

  @Post()
  create(@Body() product: Product) {
    return this.productService.create(product);
  }

  @Put()
  update(@Body() product: Product): Promise<[number]> {
    return this.productService.update(product);
  }

  @Delete(':id')
  delete(@Param() params) {
    this.productService.delete(params.id);
    return `O produto ${params.id} foi deletado.`;
  }
}

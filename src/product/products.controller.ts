import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.model';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get()
  search(): Promise<Product[]> {
    return this.productService.search();
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  findOne(@Param() params): Promise<Product> {
    return this.productService.findOne(params.id);
  }

  @Post()
  create(@Body() product): Promise<Product> {
    return this.productService.create(product);
  }
}

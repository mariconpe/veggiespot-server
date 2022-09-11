import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create_product.dto';
import { FindProductsDto } from './dto/find_products.dto';
import { UpdateProductDto } from './dto/update_product.dto';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';
@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({ summary: 'Admin creates a new product' })
  @Post()
  createProduct(
    @UploadedFile() file: File,
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    return this.productService.createProduct(file, createProductDto);
  }

  @ApiOperation({ summary: 'Returns all products' })
  @Get()
  findAll(@Query() findAllProductsDto: FindProductsDto): Promise<Product[]> {
    return this.productService.findAllProducts(findAllProductsDto);
  }

  @ApiOperation({ summary: 'Gets product by ID' })
  @Get('/:id')
  findOneById(@Param('id') id: string): Promise<Product> {
    return this.productService.findOneProductById(id);
  }

  @ApiOperation({ summary: 'Admin updates product' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @ApiOperation({ summary: 'Admin deletes product' })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string): Promise<void> {
    return this.productService.removeProduct(id);
  }
}

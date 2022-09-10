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
import { File } from './types';
@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({ summary: 'Admin creates a new product' })
  // @IsAdmin()
  @Post()
  createProduct(
    @UploadedFile() file: File,
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    return this.productService.createProduct(file, createProductDto);
  }

  @ApiOperation({ summary: 'Returns all products' })
  // @Public()
  @Get()
  findAll(@Query() findAllProductsDto: FindProductsDto): Promise<Product[]> {
    return this.productService.findAllProducts(findAllProductsDto);
  }

  @ApiOperation({ summary: 'Admin gets product by ID' })
  // @IsAdmin()
  @Get('/:id')
  findOneById(@Param('id') id: string): Promise<Product> {
    return this.productService.findOneProductById(id);
  }

  @ApiOperation({ summary: 'Admin uploads a new product picture' })
  // @IsAdmin()
  // @FileUpload()
  @Patch('picture/:id')
  uploadPhoto(
    @Param('id') id: string,
    @UploadedFile() file: File,
  ): Promise<Product> {
    return this.productService.uploadPicture(id, file);
  }

  @ApiOperation({ summary: 'Admin updates product' })
  // @IsAdmin()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @ApiOperation({ summary: 'Admin deletes product' })
  // @IsAdmin()
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string): Promise<void> {
    return this.productService.removeProduct(id);
  }
}

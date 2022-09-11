import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/external/repositories/prisma/prisma.service';
import { CreateProductDto } from './dto/create_product.dto';
import { FindProductsDto } from './dto/find_products.dto';
import { UpdateProductDto } from './dto/update_product.dto';
import { Product } from './entities/product.entity';
@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async createProduct(
    file: File,
    createProductDto: CreateProductDto,
  ): Promise<Product> {
    const basePrice = parseFloat(createProductDto.basePrice as string);
    const stock = parseInt(createProductDto.stock as string);
    const product = await this.prisma.product.create({
      data: {
        ...createProductDto,
        basePrice: basePrice,
        stock: stock,
      },
    });

    return product;
  }

  async findAllProducts({
    productName = '',
  }: FindProductsDto): Promise<Product[]> {
    return this.prisma.product.findMany({
      where: {
        name: { contains: productName, mode: 'insensitive' },
      },
      orderBy: { name: 'asc' },
    });
  }

  async findOneProductById(id: string): Promise<Product> {
    return this.prisma.product.findUnique({
      where: { id },
      rejectOnNotFound: true,
    });
  }

  async updateProduct(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.prisma.product.update({
      where: { id },
      data: { ...updateProductDto },
    });
  }

  async removeProduct(id: string): Promise<void> {
    await this.prisma.product.delete({ where: { id } });
  }
}

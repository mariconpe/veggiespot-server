import { Injectable, Inject } from '@nestjs/common';
// import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCTS_REPOSITORY')
    private productsRepository: typeof Product,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productsRepository.findAll<Product>();
  }
}

import { Injectable, Inject } from '@nestjs/common';
import { Product } from './product.model';
@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCTS_REPOSITORY')
    private productsRepository: typeof Product,
  ) {}

  async search(): Promise<Product[]> {
    const data = await this.productsRepository.findAll<Product>();

    return data;
  }

  async findOne(id: number): Promise<Product> {
    return this.productsRepository.findByPk(id);
  }

  async create(product: Product) {
    this.productsRepository.create<Product>(product);
    return `O produto número ${product.nome} foi criado!`;
  }

  async update(product: Product): Promise<[number]> {
    return this.productsRepository.update(product, {
      where: {
        id: product.id,
      },
    });
  }

  async delete(id: number) {
    const product: Product = await this.findOne(id);
    product.destroy();
  }
}

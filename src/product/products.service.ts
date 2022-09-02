import { Injectable, Inject } from '@nestjs/common';
import { UpdateOptions } from 'sequelize/types';
import { Product } from './product.model';
import { map } from 'lodash';
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

  async findOne(params: any): Promise<Product> {
    return this.productsRepository.findOne<Product>(params);
  }

  async create(product: Product): Promise<Product> {
    return this.productsRepository.create<Product>({ product });
  }

  async updateByPk(id: number, updateProduct: UpdateOptions) {
    const data = await this.productsRepository.findByPk(id);

    let needsUpdate = false;
    map(updateProduct, (value: any, key: string) => {
      const originalValue = data.get(key);
      if (value !== originalValue) {
        needsUpdate = true;
        data[key] = value;
      }
    });

    return needsUpdate ? data.save() : data;
  }
}

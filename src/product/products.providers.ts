import { Product } from './product.model';

export const ProductsProviders = [
  {
    provide: 'PRODUCTS_REPOSITORY',
    useValue: Product,
  },
];

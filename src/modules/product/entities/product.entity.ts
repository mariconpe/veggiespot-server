import { Prisma } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
export class Product implements Prisma.ProductUncheckedCreateInput {
  id?: string;

  name: string;

  picture?: string;

  basePrice: string | number;

  discountPercentage?: string | number;

  stock: string | number;

  description?: string;

  createdAt?: string | Date;
}

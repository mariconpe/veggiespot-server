import { OmitType } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Product } from '../entities/product.entity';
export class CreateProductDto extends OmitType(Product, [
  'id',
  'createdAt',
  'picture',
] as const) {
  name: string;

  @IsNotEmpty()
  basePrice: string | number;

  @IsOptional()
  stock: string | number;

  @IsString()
  @IsOptional()
  description?: string;

  discoutPercentage?: string | number;
}

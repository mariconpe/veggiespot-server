import { ApiProperty } from '@nestjs/swagger';
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Product extends Model<Product> {
  @Column({
    allowNull: false,
  })
  @ApiProperty()
  nome: string;

  @Column({
    allowNull: false,
  })
  @ApiProperty()
  estoque: number;

  @Column({
    allowNull: false,
  })
  @ApiProperty({
    type: 'number',
    format: 'double',
  })
  valor: number;

  @Column({
    allowNull: false,
  })
  @ApiProperty()
  cor: string;

  @Column({
    allowNull: false,
  })
  @ApiProperty()
  marca: string;

  @Column({
    defaultValue: false,
    allowNull: false,
  })
  @ApiProperty()
  favorito: boolean;
}

import { ApiProperty } from '@nestjs/swagger';
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Product extends Model {
  @Column
  @ApiProperty()
  id: number;

  @Column
  @ApiProperty()
  nome: string;

  @Column
  @ApiProperty()
  estoque: number;

  @Column
  @ApiProperty()
  valor: number;

  @Column
  @ApiProperty()
  cor: string;

  @Column
  @ApiProperty()
  marca: string;

  @Column({ defaultValue: false })
  @ApiProperty()
  favorito: boolean;
}

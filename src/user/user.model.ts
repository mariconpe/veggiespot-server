import { ApiProperty } from '@nestjs/swagger';
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    allowNull: false,
  })
  @ApiProperty()
  primeiro_nome: string;

  @Column({
    allowNull: false,
  })
  @ApiProperty()
  ultimo_nome: string;

  @Column({
    allowNull: false,
  })
  @ApiProperty()
  email: string;

  @Column({
    allowNull: false,
  })
  @ApiProperty({
    maximum: 11,
  })
  cep: string;

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

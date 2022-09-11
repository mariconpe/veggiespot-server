import {
  IsEmail,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto implements User {
  @IsEmail({ message: 'E-mail inválido.' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'A senha deve ter ao menos 8 digítos' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[a-z]).*$/, {
    message: 'Senha deve conter ao menos 1 número e 1 letra',
  })
  password: string;

  @IsString()
  @IsOptional()
  name?: string;
  @IsString()
  @IsOptional()
  address?: string;
}

import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { hash, compare } from 'bcryptjs';
import { hashConfig } from 'src/config/hash.config';
import { PrismaService } from 'src/external/repositories/prisma/prisma.service';
import { CreateUserDto } from './dto/create_user.dto';
import { DeleteUserDto } from './dto/delete_user.dto';
import { UpdateUserRoleDto } from './dto/update_user_role.dto';
import { UpdateUserDto } from './dto/update_user.dto';
import { UserWithoutPassword } from './entities/user_without_password.entity';
import { User } from './entities/user.entity';
import { FindUsersDto } from './dto/find_users.dto';
import { AlreadyExistsException } from 'src/exceptions/already_exists.exception';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<UserWithoutPassword | string> {
    const hashedPassword = await hash(
      createUserDto.password,
      hashConfig.saltRounds,
    );

    const userExists = await this.prisma.user.findFirst({
      where: {
        email: createUserDto.email,
      },
    });

    if (userExists) {
      throw new AlreadyExistsException('Usuário já cadastrado.');
    }

    const user = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });
    return user;
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserWithoutPassword> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new NotFoundException('Usuário não cadastrado.');
    }

    const passwordIsValid = await compare(password, user.password);
    if (!passwordIsValid) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    return this.buildResponse(user);
  }

  async findById(id: string): Promise<UserWithoutPassword> {
    const user = await this.prisma.user.findUnique({ where: { id } });

    delete user.password;

    if (!user) {
      throw new NotFoundException('User not found by id');
    }

    return { ...user };
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserWithoutPassword> {
    const user = await this.prisma.user.update({
      where: { id },
      data: { ...updateUserDto },
    });

    delete user.password;

    return { ...user };
  }

  async updateUserRole(
    updateUserRoleDto: UpdateUserRoleDto,
  ): Promise<UserWithoutPassword> {
    const user = await this.prisma.user.update({
      where: { email: updateUserRoleDto.email },
      data: { role: updateUserRoleDto.role },
    });

    delete user.password;

    return user;
  }

  async deleteUser(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }

  private buildResponse(user: User): UserWithoutPassword {
    return {
      id: user.id,
      email: user.email,
    };
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { CreateUserDto } from './dto/create_user.dto';
import { UpdateUserRoleDto } from './dto/update_user_role.dto';
import { UpdateUserDto } from './dto/update_user.dto';
import { UserWithoutPassword } from './entities/user_without_password.entity';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Creates a new user' })
  @Post()
  createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserWithoutPassword | String> {
    return this.userService.createUser(createUserDto);
  }

  @ApiOperation({ summary: 'Returns all users' })
  @Get()
  findAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @ApiOperation({ summary: "Gets user's own profile" })
  @ApiBearerAuth()
  @Get(':id')
  async findById(
    @Param('id') id: string,
    @Req() request: Request,
  ): Promise<UserWithoutPassword> {
    return this.userService.findById(id);
  }

  @ApiOperation({ summary: 'Updates user' })
  @ApiBearerAuth()
  @Patch()
  updateUser(
    @Req() request: Request,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserWithoutPassword> {
    const userId = request.user['userId'];

    return this.userService.updateUser(userId, updateUserDto);
  }

  @ApiOperation({ summary: "Admin set user's role" })
  @Patch('role')
  updateUserRole(
    @Body() updateUserRoleDto: UpdateUserRoleDto,
  ): Promise<UserWithoutPassword> {
    return this.userService.updateUserRole(updateUserRoleDto);
  }

  @ApiOperation({ summary: 'Deletes user' })
  @ApiBearerAuth()
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteUser(@Param('id') id: string): Promise<void> {
    return this.userService.deleteUser(id);
  }
}

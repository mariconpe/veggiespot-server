import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { Response } from 'express';
import { UserWithoutPassword } from 'src/modules/user/entities/user_without_password.entity';
import { UserService } from 'src/modules/user/user.service';
import { AuthService } from './auth.service';
import { CurrentUser } from './current_user.decorator';
import { LocalAuthGuard } from './guards/local_auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'Validates user login.' })
  @Post('login')
  async login(
    @CurrentUser() user: UserWithoutPassword,
    @Res({ passthrough: true }) response: Response,
  ): Promise<void> {
    await this.authService.login(user, response);
    const userRes = await this.userService.findById(user.id);
    response.send([user, userRes]);
  }
}

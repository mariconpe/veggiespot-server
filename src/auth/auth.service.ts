import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { UserWithoutPassword } from 'src/modules/user/entities/user_without_password.entity';

export type TokenPayload = {
  userId: string;
};

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: UserWithoutPassword, response: Response): Promise<void> {
    const tokenPayload: TokenPayload = {
      userId: user.id,
    };

    const expires = new Date();
    expires.setSeconds(
      expires.getSeconds() + this.configService.get('JWT_EXPIRATION_TIME'),
    );

    const token = this.jwtService.sign(tokenPayload);

    response.cookie('Authentication ', token, {
      httpOnly: true,
      expires: expires,
    });
  }
}

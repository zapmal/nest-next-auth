import {
  Body,
  Controller,
  Post,
  BadRequestException as BadRequest,
  UnauthorizedException as Unauthorized,
  NotFoundException as NotFound,
  UsePipes,
  Res,
  Get,
} from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { sign } from 'jsonwebtoken';
import { Response } from 'express';

import { JoiValidationPipe } from 'src/utils/joi.pipe';
import { SigninDTO, SignupDTO } from './auth.dto';
import { signinSchema, signupSchema } from './auth.schemas';

import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @UsePipes(new JoiValidationPipe(signupSchema))
  async signup(@Body() { name, password, email }: SignupDTO) {
    const hashedPassword = await hash(password, 10);

    const user = await this.authService.signup({
      name,
      password: hashedPassword,
      email,
      refresh_token: uuid(),
    });

    if (!user) {
      throw new BadRequest(
        'Something went wrong when trying to create the user, try again.',
      );
    }

    const token = sign({ user }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRY_TIME,
    });

    return {
      ...user,
      token,
    };
  }

  @Post('signin')
  @UsePipes(new JoiValidationPipe(signinSchema))
  async signin(
    @Body() userCredentials: SigninDTO,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.authService.getUserByEmail(userCredentials.email);

    if (!user) {
      throw new NotFound('The user does not exist.');
    }

    const passwordsMatch = await compare(
      userCredentials.password,
      user.password,
    );

    if (!passwordsMatch) {
      throw new Unauthorized('The password does not match.');
    }

    const token = sign({ user }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRY_TIME,
    });

    response.cookie('refresh-token', user.refresh_token);

    return {
      message: 'Signed in successfully.',
      token,
    };
  }

  @Get('/refresh')
  refresh() {
    console.log('refresh the token here');
  }
}

import {
  Body,
  Controller,
  Post,
  BadRequestException as BadRequest,
  UnauthorizedException as Unauthorized,
  NotFoundException as NotFound,
  UsePipes,
} from '@nestjs/common';
import { compare, hash } from 'bcrypt';
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
    });

    if (!user) {
      throw new BadRequest(
        'Something went wrong when trying to create the user, try again.',
      );
    }

    return user;
  }

  @Post('signin')
  @UsePipes(new JoiValidationPipe(signinSchema))
  async signin(@Body() userCredentials: SigninDTO) {
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

    return { message: 'Signed in successfully.' };
  }
}

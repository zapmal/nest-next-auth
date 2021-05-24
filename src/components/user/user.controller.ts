import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';

import { CreateUserDTO } from './user.dto';
import { createUserSchema } from './user.schemas';
import { JoiValidationPipe } from '../../utils/joi.pipe';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserByID(id);
  }

  @Post()
  @UsePipes(new JoiValidationPipe(createUserSchema))
  createUser(@Body() userData: CreateUserDTO) {
    return this.userService.createUser(userData);
  }
}

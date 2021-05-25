import {
  NotFoundException as NotFound,
  Body,
  Controller,
  Delete,
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
  async getUser(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.getUserByID(id);

    if (!user) {
      throw new NotFound('Requested user was not found.');
    }

    return user;
  }

  @Post()
  @UsePipes(new JoiValidationPipe(createUserSchema))
  async createUser(@Body() userData: CreateUserDTO) {
    return await this.userService.createUser(userData);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    const userExists = await this.userService.getUserByID(id);

    if (!userExists) {
      throw new NotFound('Requested user was not found.');
    }

    const deletedUser = await this.userService.deleteUserByID(id);

    return {
      message: `User "${deletedUser.name}" was erased from the system.`,
    };
  }
}

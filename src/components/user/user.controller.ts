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
  Put,
} from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDTO, UpdateUserDTO } from './user.dto';
import { createUserSchema } from './user.schemas';

import { JoiValidationPipe } from '../../utils/joi.pipe';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    const users = await this.userService.getAllUsers();

    if (!users) {
      throw new NotFound('There are no users in the system.');
    }

    return users;
  }

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

    return { message: 'User successfully erased from the system.' };
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() newUserData: UpdateUserDTO,
  ) {
    const userExists = await this.userService.getUserByID(id);

    if (!userExists) {
      throw new NotFound('Requested user was not found.');
    }

    await this.userService.updateUser(id, newUserData);

    return { message: 'User updated successfully.' };
  }
}

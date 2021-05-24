import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

import { User } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.getUserByID(id);
  }

  @Post()
  createUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<User> {
    return this.userService.createUser(userData);
  }
}

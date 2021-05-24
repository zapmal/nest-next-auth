import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';

import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getUserByID(id: string): Record<string, any> {
    return { message: `Hello user with id ${id}` };
  }

  createUser(userData: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data: userData });
  }
}

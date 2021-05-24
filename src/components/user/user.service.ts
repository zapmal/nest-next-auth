import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';

import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getUserByID(id: number): Record<string, any> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  createUser(userData: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data: userData });
  }
}

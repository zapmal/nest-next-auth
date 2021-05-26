import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';

import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  getUser(id: number): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  createUser(userData: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data: userData });
  }

  deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }

  updateUser(id: number, newUserData: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: newUserData,
    });
  }
}

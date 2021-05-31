import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma.service';

import { Prisma, Users as User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getAllUsers(): Promise<User[]> {
    return this.prisma.users.findMany();
  }

  getUser(id: number): Promise<User> {
    return this.prisma.users.findUnique({ where: { id } });
  }

  deleteUser(id: number): Promise<User> {
    return this.prisma.users.delete({ where: { id } });
  }

  updateUser(id: number, newUserData: Prisma.UsersUpdateInput): Promise<User> {
    return this.prisma.users.update({
      where: { id },
      data: newUserData,
    });
  }
}

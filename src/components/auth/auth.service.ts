import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../config/prisma.service';
import { Prisma, Users as User } from '.prisma/client';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  signup(userData: Prisma.UsersCreateInput): Promise<User> {
    return this.prismaService.users.create({ data: userData });
  }

  getUserByEmail(email: string): Promise<User> {
    return this.prismaService.users.findFirst({ where: { email: email } });
  }
}

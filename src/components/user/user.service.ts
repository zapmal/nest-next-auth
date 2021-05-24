import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUserByID(id: string): Record<string, any> {
    return { message: `Hello user with id ${id}` };
  }
}

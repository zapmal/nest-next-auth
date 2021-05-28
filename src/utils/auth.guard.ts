import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { verify } from 'jsonwebtoken';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.validate(request);
  }

  validate(request: Request & { user: Record<string, unknown> }) {
    const token = request.cookies['token'];
    const SECRET = process.env.JWT_SECRET;

    if (!token) return false;

    const user = verify(token, SECRET) as Record<string, unknown>;

    if (!user) return false;

    request.user = user;

    return true;
  }

  validateJwt(request: Request & { user: Record<string, unknown> }) {
    const authHeader = request.headers.authorization;
    const SECRET = process.env.JWT_SECRET;

    if (!authHeader || authHeader.startsWith('Bearer ')) {
      return false;
    }

    const token = authHeader.split(' ')[1];
    const user = verify(token, SECRET) as Record<string, unknown>;

    request.user = user;

    return true;
  }
}

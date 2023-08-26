// src/indego/auth.guard.ts

import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];

    // Replace 'YOUR_STATIC_TOKEN' with your actual static token
    const isValidToken = token === 'YOUR_STATIC_TOKEN';

    if (!isValidToken) {
      throw new UnauthorizedException('Invalid token');
    }

    return isValidToken;
  }
}

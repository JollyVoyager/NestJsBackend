import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../roles.decorator';


@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request =  context.switchToHttp().getRequest();
    const user = request.user;
    console.log(user);
    
    // return true;

    const hasRole = () => user.roles.some(role => roles.includes(role));
    
    return user && user.roles && hasRole();
  }
}
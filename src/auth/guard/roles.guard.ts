import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PrismaService } from './../../prisma/prisma.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prismaService: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const request = context.switchToHttp().getRequest();
    if (request?.user) {
      const { id } = request.user;
      // const user = await this.userService.getUserById(id);
      const user = await this.prismaService.user.findUnique({
        where: {
          id: id,
        },
      });
      return roles.includes(user.role);
    }

    return false;
  }
}

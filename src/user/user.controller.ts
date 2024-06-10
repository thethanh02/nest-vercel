import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { MyJwtGuard, RolesGuard } from '../auth/guard';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';
import { Roles } from './../auth/decorator/roles.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('api/user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @UseGuards(MyJwtGuard)
  @ApiBearerAuth()
  getMe(@GetUser() user: User) {
    return user;
  }

  @Get('all')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @UseGuards(MyJwtGuard) // JwtGuard must be below RolesGuard
  @ApiBearerAuth()
  getAllUsers(@GetUser() user: User) {
    return this.userService.getAllUsers();
  }
}

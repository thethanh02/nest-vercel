import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthEntity } from './auth.entity';

@Controller('api/auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() authDto: AuthDTO) {
    return this.authService.register(authDto);
  }

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  login(@Body() authDto: AuthDTO) {
    return this.authService.login(authDto);
  }
}

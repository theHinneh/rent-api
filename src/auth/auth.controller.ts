import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { UserDto } from './auth.dto';
import { User } from './auth.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) userDto: UserDto): Promise<User> {
    return this.authService.signUp(userDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) userDto: UserDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(userDto);
  }
}

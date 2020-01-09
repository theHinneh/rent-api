import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtPayload } from './jwt/jwt-payload.interface';
import { UserDto } from './auth.dto';
import { User } from './auth.entity';
import { UserRepo } from './auth.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepo) private readonly userRepo: UserRepo,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(userDto: UserDto): Promise<User> {
    return await this.userRepo.signUp(userDto);
  }

  async signIn(userDto: UserDto): Promise<{ accessToken: string }> {
    try {
      const { username } = await this.userRepo.validateUser(userDto);
      const payload: JwtPayload = { username };
      const accessToken = await this.jwtService.sign(payload);

      return { accessToken };
    } catch (err) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}

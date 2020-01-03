import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { UserRepo } from './auth.repository';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt/jwt.stratagy';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepo]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: `${process.env.SECRET}`,
      signOptions: { expiresIn: 7200 },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [PassportModule, JwtStrategy],
})
export class AuthModule {}

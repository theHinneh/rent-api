import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ProfileController } from './profile.controller';
import { ProfileRepo } from './profile.repository';
import { ProfileService } from './profile.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([ProfileRepo]), AuthModule],
  providers: [ProfileService],
  controllers: [ProfileController],
})
export class ProfileModule {}

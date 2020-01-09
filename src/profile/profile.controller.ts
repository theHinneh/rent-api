import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { GetUser } from 'src/auth/jwt/get-user.decorator';
import { User } from '../auth/auth.entity';
import { ProfileUpdate } from './profile-update.dto';
import { ProfileDto } from './profile.dto';
import { ProfileService } from './profile.service';
// tslint:disable-next-line: no-var-requires
const MulterGoogleCloudStorage = require('multer-google-storage');

@Controller('profile')
@UseGuards(AuthGuard())
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('images', {
      storage: new MulterGoogleCloudStorage.storageEngine(),
    }),
  )
  @UsePipes(ValidationPipe)
  async createRent(
    @GetUser() user: User,
    @Body() profileDto: ProfileDto,
    @UploadedFile() images: any,
  ) {
    return this.profileService.createRent(user, profileDto, await images);
  }

  @Get()
  getRent(@GetUser() user: User) {
    return this.profileService.getRent(user);
  }

  // @Get()
  // getAllRents() {
  //   return this.profileService.getAllRents();
  // }

  @Patch('/:id')
  updateRent(
    @Param('id', ParseIntPipe) id: number,
    @Body() update: ProfileUpdate,
    @GetUser() user: User,
  ) {
    return this.profileService.updateRent(id, update, user);
  }

  @Delete('/:id')
  deleteRent(@Param('id', ParseIntPipe) id: number, @GetUser() user: User) {
    return this.profileService.deleteRent(id, user);
  }
}

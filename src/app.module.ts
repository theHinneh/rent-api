import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
const MulterGoogleCloudStorage = require('multer-google-storage');

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    ProfileModule,
    MulterModule.register({
      storage: MulterGoogleCloudStorage.storageEngine(),
      // storage: MulterGoogleCloudStorage({
      //   GCS_BUCKET: 'rent-api',
      //   GCLOUD_PROJECT: 'fine-century-264510',
      //   GCS_KEYFILE: '../fine-century-264510-00501e3d618e.json',
      // }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

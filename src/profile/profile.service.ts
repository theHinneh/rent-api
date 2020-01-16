import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../auth/auth.entity';
import { GCSDto } from './gcs.dto';
import { ProfileDto } from './profile.dto';
import { Profile } from './profile.entity';
import { ProfileRepo } from './profile.repository';
import { Storage } from '@google-cloud/storage';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileRepo) private readonly profileRepo: ProfileRepo,
  ) {}

  async createRent(user: User, profileDto: ProfileDto, images: GCSDto) {
    return this.profileRepo.createRent(profileDto, user, await images);
  }

  getRent(user: User) {
    return this.profileRepo.ownnerGetRents(user);
  }

  async getRentById(id: number, user: User) {
    const found = await this.profileRepo.findOne({
      where: { id, owner: user.id },
    });
    if (!found) {
      throw new NotFoundException(`Reminder with ID "${id}" not found`);
    }
    return found;
  }

  async updateRent(
    id: number,
    update: ProfileDto,
    images: GCSDto,
    user: User,
  ): Promise<Profile> {
    const rent = await this.getRentById(id, user);
    const imageLinks: any = await images;

    const storage = new Storage({
      keyFilename: process.env.GCS_KEYFILE,
    });

    const oldImagePaths = [];
    const newImagePaths = [];

    imageLinks.filter(p => {
      newImagePaths.push(p.filename);
    });
    rent.images.filter(p => {
      oldImagePaths.push(p.filename);
    });

    oldImagePaths.forEach(async p => {
      if (newImagePaths.indexOf(p) === -1) {
        await storage
          .bucket(process.env.GCS_BUCKET)
          .file(p)
          .delete();
      }
    });

    rent.additionalInfo = update.additionalInfo;
    rent.areaName = update.areaName;
    rent.category = update.category;
    rent.city = update.city;
    rent.landmark = update.landmark;
    rent.numBedrooms = update.numBedrooms;
    rent.phone = update.phone;
    rent.region = update.region;

    try {
      rent.images = await imageLinks;
      await rent.save();
      return rent;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  async deleteRent(id: number, user: User) {
    const result = await this.profileRepo.delete({ id, owner: user });
    if (result.affected === 0) {
      throw new NotFoundException(`Reminder with ID "${id}" not found`);
    }
  }
}

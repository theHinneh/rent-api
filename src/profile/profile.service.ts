import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../auth/auth.entity';
import { ProfileUpdate } from './profile-update.dto';
import { ProfileDto } from './profile.dto';
import { Profile } from './profile.entity';
import { ProfileRepo } from './profile.repository';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileRepo) private readonly profileRepo: ProfileRepo,
  ) {}

  async createRent(user: User, profileDto: ProfileDto, link: any) {
    return this.profileRepo.createRent(profileDto, user, await link);
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

  // getAllRents() {
  //   return this.profileRepo.getAllRents();
  // }

  async updateRent(
    id: number,
    update: ProfileUpdate,
    user: User,
  ): Promise<Profile> {
    const input = await this.getRentById(id, user);
    input.additionalInfo = update.additionalInfo;
    input.areaName = update.areaName;
    input.category = update.category;
    input.city = update.city;
    input.images = update.images;
    input.landmark = update.landmark;
    input.numBedrooms = update.numBedrooms;
    input.phone = update.phone;
    input.region = update.region;

    await input.save();
    return input;
  }

  async deleteRent(id: number, user: User) {
    const result = await this.profileRepo.delete({ id, owner: user });
    if (result.affected === 0) {
      throw new NotFoundException(`Reminder with ID "${id}" not found`);
    }
  }
}

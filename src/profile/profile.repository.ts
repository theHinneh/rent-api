import { BadRequestException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../auth/auth.entity';
import { ProfileDto } from './profile.dto';
import { Profile } from './profile.entity';

@EntityRepository(Profile)
export class ProfileRepo extends Repository<Profile> {
  async createRent(profileDto: ProfileDto, user: User, images: any) {
    const imageLink: any = await images;
    const rent = new Profile();

    rent.additionalInfo = profileDto.additionalInfo;
    rent.areaName = profileDto.areaName;
    rent.category = profileDto.category;
    rent.city = profileDto.city;
    rent.landmark = profileDto.landmark;
    rent.numBedrooms = profileDto.numBedrooms;
    rent.phone = profileDto.phone;
    rent.region = profileDto.region;
    rent.owner = user;

    try {
      rent.images = await imageLink;
      await rent.save();
      delete rent.owner;
      return rent;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  async ownnerGetRents(user: User) {
    const query = this.createQueryBuilder('rents');
    query.where('rents.owner = :owner', { owner: user.id });
    const rents = await query.getMany();
    return rents;
  }

  // async getAllRents() {
  //   const query = this.createQueryBuilder('rents');
  //   const rents = await query.getMany();
  //   return rents;
  // }
}

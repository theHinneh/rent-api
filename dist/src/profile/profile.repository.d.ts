import { Repository } from 'typeorm';
import { User } from '../auth/auth.entity';
import { ProfileDto } from './profile.dto';
import { Profile } from './profile.entity';
export declare class ProfileRepo extends Repository<Profile> {
    createRent(profileDto: ProfileDto, user: User, link: any): Promise<Profile>;
    ownnerGetRents(user: User): Promise<Profile[]>;
    getAllRents(): Promise<Profile[]>;
}

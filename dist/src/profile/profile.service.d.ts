import { User } from '../auth/auth.entity';
import { GCSDto } from './gcs.dto';
import { ProfileUpdate } from './profile-update.dto';
import { ProfileDto } from './profile.dto';
import { Profile } from './profile.entity';
import { ProfileRepo } from './profile.repository';
export declare class ProfileService {
    private readonly profileRepo;
    constructor(profileRepo: ProfileRepo);
    createRent(user: User, profileDto: ProfileDto, link: GCSDto): Promise<Profile>;
    getRent(user: User): Promise<Profile[]>;
    getRentById(id: number, user: User): Promise<Profile>;
    updateRent(id: number, update: ProfileUpdate, user: User): Promise<Profile>;
    deleteRent(id: number, user: User): Promise<void>;
}

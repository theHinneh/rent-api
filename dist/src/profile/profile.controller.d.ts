import { User } from '../auth/auth.entity';
import { ProfileUpdate } from './profile-update.dto';
import { ProfileDto } from './profile.dto';
import { ProfileService } from './profile.service';
import { GCSDto } from './gcs.dto';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    createRent(user: User, profileDto: ProfileDto, images: GCSDto): Promise<import("./profile.entity").Profile>;
    getRent(user: User): Promise<import("./profile.entity").Profile[]>;
    updateRent(id: number, update: ProfileUpdate, user: User): Promise<import("./profile.entity").Profile>;
    deleteRent(id: number, user: User): Promise<void>;
}

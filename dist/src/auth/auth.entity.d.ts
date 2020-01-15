import { BaseEntity } from 'typeorm';
import { Profile } from '../profile/profile.entity';
export declare class User extends BaseEntity {
    id: number;
    username: string;
    password: string;
    salt: string;
    profile: Profile;
    validatePassword(password: string): Promise<boolean>;
}

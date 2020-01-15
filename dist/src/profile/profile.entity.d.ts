import { BaseEntity } from 'typeorm';
import { User } from '../auth/auth.entity';
export declare class Profile extends BaseEntity {
    id: number;
    category: string;
    numBedrooms: number;
    region: string;
    city: string;
    areaName: string;
    phone: number;
    landmark: string;
    additionalInfo: string;
    images: string;
    owner: User;
}

import { Entity } from 'typeorm';

@Entity()
export class ProfileUpdate {
  category: string;
  numBedrooms: number;
  region: string;
  city: string;
  areaName: string;
  phone: number;
  landmark: string;
  additionalInfo: string;
  images: any;
}

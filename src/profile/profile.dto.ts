import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
export class ProfileDto {
  @IsString()
  @IsNotEmpty()
  category: string;

  @IsNumber()
  numBedrooms: number;

  @IsString()
  @IsNotEmpty()
  region: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  areaName: string;

  @IsString()
  phone: number;

  @IsString()
  landmark: string;

  @IsString()
  additionalInfo: string;

  @IsArray()
  images: any;
}

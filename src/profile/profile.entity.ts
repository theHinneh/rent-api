import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../auth/auth.entity';

@Entity()
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  numBedrooms: number;

  @Column()
  region: string;

  @Column()
  city: string;

  @Column()
  areaName: string;

  @Column()
  phone: number;

  @Column()
  landmark: string;

  @Column()
  additionalInfo: string;

  @Column({ type: 'json' })
  images: string;

  @ManyToOne(
    type => User,
    user => user.profile,
    { eager: false },
  )
  owner: User;
}

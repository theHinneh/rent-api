import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../src/auth/auth.entity';
import { Profile } from '../src/profile/profile.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'theHinneh',
  port: 3306,
  entities: [User, Profile],
  database: 'rent-api',
  synchronize: true,

  // entities: [User, Profile],
  // type: 'postgres',
  // synchronize: true,
  // url:
  //   'postgres://ynyldrcrlzxcle:5a755859bc55a566cc5ead2aabfbe8cd7fafa43b6d5ec7c613f902fa82ef6e19@ec2-3-214-53-225.compute-1.amazonaws.com:5432/d3hkvirc566s8q',
};

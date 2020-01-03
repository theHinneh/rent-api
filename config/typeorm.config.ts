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
};

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
  //   'postgres://tgqbtuzbvxizos:69839986ba009e31769a2893178d3023408ba8302c8b234f61fb63296b20eebe@ec2-174-129-32-212.compute-1.amazonaws.com:5432/d9ppjjoqfqli9e',
};

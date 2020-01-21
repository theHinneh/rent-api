import { Repository, EntityRepository } from 'typeorm';
import { Profile } from '../profile/profile.entity';

@EntityRepository(Profile)
export class TenantsRepo extends Repository<Profile> {
  async tenantsGetRents() {
    const query = this.createQueryBuilder('rents');
    const rents = await query.getMany();
    return rents;
  }
}

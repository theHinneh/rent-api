import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TenantsRepo } from './tenants.repository';

@Injectable()
export class TenantsService {
  constructor(
    @InjectRepository(TenantsRepo) private readonly tenantsRepo: TenantsRepo,
  ) {}

  getRents() {
    return this.tenantsRepo.tenantsGetRents();
  }
}

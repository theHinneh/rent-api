import { Controller, Get } from '@nestjs/common';
import { TenantsService } from './tenants.service';

@Controller('rents')
export class TenantsController {
  constructor(private readonly tenantsService: TenantsService) {}
  @Get()
  getRents() {
    return this.tenantsService.getRents();
  }
}

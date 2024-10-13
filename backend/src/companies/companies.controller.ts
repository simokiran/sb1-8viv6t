import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Company } from './companies.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('companies')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  @Roles('super_admin')
  create(@Body() companyData: Partial<Company>) {
    return this.companiesService.create(companyData);
  }

  @Get()
  @Roles('super_admin')
  findAll() {
    return this.companiesService.findAll();
  }

  @Get(':id')
  @Roles('super_admin', 'company_admin')
  findOne(@Param('id') id: string) {
    return this.companiesService.findOne(id);
  }

  @Patch(':id')
  @Roles('super_admin')
  update(@Param('id') id: string, @Body() companyData: Partial<Company>) {
    return this.companiesService.update(id, companyData);
  }

  @Delete(':id')
  @Roles('super_admin')
  remove(@Param('id') id: string) {
    return this.companiesService.remove(id);
  }
}
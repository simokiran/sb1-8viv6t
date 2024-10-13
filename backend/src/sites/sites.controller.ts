import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SitesService } from './sites.service';
import { Site } from './sites.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('sites')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @Post()
  @Roles('super_admin', 'company_admin')
  create(@Body() siteData: Partial<Site>) {
    return this.sitesService.create(siteData);
  }

  @Get()
  @Roles('super_admin', 'company_admin')
  findAll() {
    return this.sitesService.findAll();
  }

  @Get(':id')
  @Roles('super_admin', 'company_admin', 'site_admin')
  findOne(@Param('id') id: string) {
    return this.sitesService.findOne(id);
  }

  @Patch(':id')
  @Roles('super_admin', 'company_admin')
  update(@Param('id') id: string, @Body() siteData: Partial<Site>) {
    return this.sitesService.update(id, siteData);
  }

  @Delete(':id')
  @Roles('super_admin', 'company_admin')
  remove(@Param('id') id: string) {
    return this.sitesService.remove(id);
  }
}
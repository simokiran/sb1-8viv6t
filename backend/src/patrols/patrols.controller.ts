import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PatrolsService } from './patrols.service';
import { Patrol } from './patrols.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('patrols')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PatrolsController {
  constructor(private readonly patrolsService: PatrolsService) {}

  @Post()
  @Roles('company_admin', 'site_admin')
  create(@Body() patrolData: Partial<Patrol>) {
    return this.patrolsService.create(patrolData);
  }

  @Get()
  @Roles('company_admin', 'site_admin', 'security_guard')
  findAll() {
    return this.patrolsService.findAll();
  }

  @Get(':id')
  @Roles('company_admin', 'site_admin', 'security_guard')
  findOne(@Param('id') id: string) {
    return this.patrolsService.findOne(id);
  }

  @Patch(':id')
  @Roles('company_admin', 'site_admin')
  update(@Param('id') id: string, @Body() patrolData: Partial<Patrol>) {
    return this.patrolsService.update(id, patrolData);
  }

  @Delete(':id')
  @Roles('company_admin', 'site_admin')
  remove(@Param('id') id: string) {
    return this.patrolsService.remove(id);
  }
}
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PatrolRoute } from './patrol-routes.entity';

@Injectable()
export class PatrolRoutesService {
  constructor(
    @InjectRepository(PatrolRoute)
    private patrolRoutesRepository: Repository<PatrolRoute>,
  ) {}

  async create(patrolRouteData: Partial<PatrolRoute>): Promise<PatrolRoute> {
    const patrolRoute = this.patrolRoutesRepository.create(patrolRouteData);
    return await this.patrolRoutesRepository.save(patrolRoute);
  }

  async findAll(): Promise<PatrolRoute[]> {
    return await this.patrolRoutesRepository.find({ relations: ['site', 'checkpoints'] });
  }

  async findOne(id: string): Promise<PatrolRoute> {
    return await this.patrolRoutesRepository.findOne({ where: { id }, relations: ['site', 'checkpoints'] });
  }

  async update(id: string, patrolRouteData: Partial<PatrolRoute>): Promise<PatrolRoute> {
    await this.patrolRoutesRepository.update(id, patrolRouteData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.patrolRoutesRepository.delete(id);
  }
}
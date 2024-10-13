import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patrol } from './patrols.entity';
import { EventsGateway } from '../events/events.gateway';

@Injectable()
export class PatrolsService {
  constructor(
    @InjectRepository(Patrol)
    private patrolsRepository: Repository<Patrol>,
    private eventsGateway: EventsGateway,
  ) {}

  // ... (previous methods)

  async updateStatus(id: string, status: string): Promise<Patrol> {
    const patrol = await this.patrolsRepository.findOne({ where: { id } });
    patrol.status = status;
    const updatedPatrol = await this.patrolsRepository.save(patrol);
    
    this.eventsGateway.server.emit('patrolStatusChanged', {
      patrolId: id,
      newStatus: status,
    });

    return updatedPatrol;
  }
}
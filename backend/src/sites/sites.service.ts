import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Site } from './sites.entity';

@Injectable()
export class SitesService {
  constructor(
    @InjectRepository(Site)
    private sitesRepository: Repository<Site>,
  ) {}

  async create(siteData: Partial<Site>): Promise<Site> {
    const site = this.sitesRepository.create(siteData);
    return await this.sitesRepository.save(site);
  }

  async findAll(): Promise<Site[]> {
    return await this.sitesRepository.find({ relations: ['company'] });
  }

  async findOne(id: string): Promise<Site> {
    return await this.sitesRepository.findOne({ where: { id }, relations: ['company'] });
  }

  async update(id: string, siteData: Partial<Site>): Promise<Site> {
    await this.sitesRepository.update(id, siteData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.sitesRepository.delete(id);
  }
}
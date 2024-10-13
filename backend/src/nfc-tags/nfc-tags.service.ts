import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NFCTag } from './nfc-tags.entity';

@Injectable()
export class NFCTagsService {
  constructor(
    @InjectRepository(NFCTag)
    private nfcTagsRepository: Repository<NFCTag>,
  ) {}

  async create(nfcTagData: Partial<NFCTag>): Promise<NFCTag> {
    const nfcTag = this.nfcTagsRepository.create(nfcTagData);
    return await this.nfcTagsRepository.save(nfcTag);
  }

  async findAll(): Promise<NFCTag[]> {
    return await this.nfcTagsRepository.find({ relations: ['site'] });
  }

  async findOne(id: string): Promise<NFCTag> {
    return await this.nfcTagsRepository.findOne({ where: { id }, relations: ['site'] });
  }

  async update(id: string, nfcTagData: Partial<NFCTag>): Promise<NFCTag> {
    await this.nfcTagsRepository.update(id, nfcTagData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.nfcTagsRepository.delete(id);
  }
}
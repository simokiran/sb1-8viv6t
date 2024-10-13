import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Site } from '../sites/sites.entity';
import { NFCTag } from '../nfc-tags/nfc-tags.entity';

@Entity()
export class PatrolRoute {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Site, site => site.patrolRoutes)
  site: Site;

  @ManyToMany(() => NFCTag)
  @JoinTable()
  checkpoints: NFCTag[];
}
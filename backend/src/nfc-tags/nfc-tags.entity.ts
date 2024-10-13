import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Site } from '../sites/sites.entity';

@Entity()
export class NFCTag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tagId: string;

  @Column()
  location: string;

  @ManyToOne(() => Site, site => site.nfcTags)
  site: Site;
}
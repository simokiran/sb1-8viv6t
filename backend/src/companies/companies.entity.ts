import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Site } from '../sites/sites.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Site, site => site.company)
  sites: Site[];
}
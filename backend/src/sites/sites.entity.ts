import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Company } from '../companies/companies.entity';
import { Patrol } from '../patrols/patrols.entity';

@Entity()
export class Site {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Company, company => company.sites)
  company: Company;

  @OneToMany(() => Patrol, patrol => patrol.site)
  patrols: Patrol[];
}
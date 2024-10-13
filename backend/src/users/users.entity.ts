import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: ['super_admin', 'company_admin', 'site_admin', 'security_guard'],
  })
  role: string;

  @Column({ nullable: true })
  companyId: string;

  @Column({ nullable: true })
  siteId: string;
}
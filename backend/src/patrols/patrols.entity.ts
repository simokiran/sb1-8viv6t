import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Site } from '../sites/sites.entity';
import { User } from '../users/users.entity';

@Entity()
export class Patrol {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Site, site => site.patrols)
  site: Site;

  @ManyToOne(() => User)
  assignedGuard: User;

  @Column('simple-array')
  checkpoints: string[];

  @Column({ type: 'timestamp' })
  scheduledStart: Date;

  @Column({ type: 'timestamp', nullable: true })
  actualStart: Date;

  @Column({ type: 'timestamp', nullable: true })
  actualEnd: Date;

  @Column({ default: false })
  completed: boolean;
}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatrolsService } from './patrols.service';
import { PatrolsController } from './patrols.controller';
import { Patrol } from './patrols.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Patrol])],
  providers: [PatrolsService],
  controllers: [PatrolsController],
  exports: [PatrolsService],
})
export class PatrolsModule {}
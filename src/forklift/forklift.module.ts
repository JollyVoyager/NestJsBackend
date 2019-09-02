import { Module } from '@nestjs/common';
import { ForkliftController } from './forklift.controller';
import { ForkliftService } from './forklift.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ForkliftRepository } from './forklift.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ForkliftRepository]),
  ],
  controllers: [ForkliftController],
  providers: [ForkliftService]
})
export class ForkliftModule {}

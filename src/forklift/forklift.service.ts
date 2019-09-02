import { Injectable } from '@nestjs/common';
import { ForkliftRepository } from './forklift.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ForkliftService {
  constructor(
    @InjectRepository(ForkliftRepository)
    private forkliftRepository: ForkliftRepository,
  ) {}
}

import { Forklift } from './forklift.entity';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(Forklift)
export class ForkliftRepository extends Repository<Forklift> {

}
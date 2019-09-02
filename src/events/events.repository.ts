import { Repository, EntityRepository } from 'typeorm';
import { Events } from './events.entity';

@EntityRepository(Events)
export class EventsRepository extends Repository<Events> {

}
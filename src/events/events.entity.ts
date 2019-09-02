import { Forklift } from '../forklift/forklift.entity';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Events extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  serialnumber: number;

  @Column()
  timestamp: number;

  @Column()
  duration: number;

  @ManyToOne(type => Forklift, forklift => forklift.events, { eager: false })
  forklift: Forklift;
}

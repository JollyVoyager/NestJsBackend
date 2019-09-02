import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Events } from '../events/events.entity';

@Entity()
export class Forklift extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    serialnumber: number;

    @Column()
    type: number;

    @OneToMany(type => Events, event => event.forklift, { eager: false})
     events: Events[];
}
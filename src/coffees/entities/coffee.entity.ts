import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity('coffee')
export class Coffee {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees)
  @JoinTable()
  flavors: string[];
}

import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { IEvent } from '../types';

@Entity()
export class Event extends BaseEntity {
  constructor({ id, title, description, date }: Partial<IEvent> = {}) {
    super();

    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  date: string;
}
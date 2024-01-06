import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './task-status.enum';

@Entity() // This is a decorator, tells that this is a database entity
export class Task {
  @PrimaryGeneratedColumn('uuid') // Autogenerate the id, and treat it as the primary key
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}

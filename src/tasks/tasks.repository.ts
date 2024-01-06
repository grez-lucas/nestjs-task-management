import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Task } from './data.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TasksRepository extends Repository<Task> {
  constructor(private dataSource: DataSource) {
    super(Task, dataSource.createEntityManager());
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;

    // Creating is not asynchronous, so we don't need to await
    // We do need to write it to the DB, and that is asynchronous
    const task = this.create({
      title: title,
      description: description,
      status: TaskStatus.OPEN,
    });

    await this.save(task);

    return task;
  }
}

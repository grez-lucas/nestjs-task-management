import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-tast.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title: title,
      description: description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  getTask(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  deleteTaskById(id: string): void {
    const index: number = this.tasks.findIndex((task) => task.id === id);

    if (index != -1) {
      this.tasks.splice(index, 1);
    }
  }

  updateTaskStatus(id: string, updateTaskStatus: UpdateTaskStatusDto): void {
    const { status } = updateTaskStatus;

    const task = this.tasks.find((task) => task.id === id);
    task.status = status;
  }
}

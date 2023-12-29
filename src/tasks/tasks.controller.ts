import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  // Notice that we're using dependency injection to inject the TasksService into the TasksController.
  // If we make this private tasksService: TasksService, then we can use this.tasksService in our methods.
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(): Task[] {
    return this.tasksService.getTasks();
  }
}

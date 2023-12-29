import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-tast.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(): Task[] {
    return this.tasksService.getTasks();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    console.log('Body: ', createTaskDto);
    return this.tasksService.createTask(createTaskDto);
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Task {
    return this.tasksService.getTask(id);
  }
}

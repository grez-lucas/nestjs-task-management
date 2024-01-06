import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './data.entity';
import { TasksRepository } from './tasks.repository';
@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }

  //   this.tasks.push(task);
  //   return task;
  // }

  async getTaskById(id: string): Promise<Task> {
    // Fetch the task from database
    // return error if it does not exist
    const found = await this.tasksRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return found;
  }

  async deleteTaskById(id: string): Promise<void> {
    const task = await this.getTaskById(id);

    await this.tasksRepository.delete(task.id);
  }
  // deleteTaskById(id: string): void {
  //   const found = this.getTask(id);

  //   this.tasks = this.tasks.filter((task) => task.id != found.id);
  // }

  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTask(id);
  //   task.status = status;
  //   return task;
  // }

  // getTasksWithFilters(filterDto: GetTasksFilterDto) {
  //   const { status, search } = filterDto;

  //   // define a temporary array to hold the result
  //   let tasks = this.getAllTasks();

  //   // do something with status
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }

  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });

  //     return tasks;
  //   }
  // }
}

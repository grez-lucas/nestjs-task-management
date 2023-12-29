// Interface is a typescript concept that enforces the shape of an object upon compilation
// Therefore after compilation they are not preserved

// Classes are useful for creating multiple instances of the same shape following a blueprint
// Also useful when enhancing them with methods

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

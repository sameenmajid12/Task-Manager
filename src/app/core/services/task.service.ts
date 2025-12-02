import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = signal<Task[]>([
    {
      id: 1,
      title: 'First task',
      description: 'Learn angular',
      completed: false,
      createdAt: 'December 1, 2025',
      category: {
        id: 1,
        name: 'Internship',
      },
    },
    {
      id: 2,
      title: 'Second task',
      description: 'Learn .NET',
      completed: false,
      createdAt: 'December 1, 2025',
      category: {
        id: 1,
        name: 'Internship',
      },
    },
    {
      id: 3,
      title: 'Third task',
      description: 'Learn SQL',
      completed: false,
      createdAt: 'December 1, 2025',
      category: {
        id: 1,
        name: 'Internship',
      },
    },
  ]);
  readonly tasks$ = this.tasks.asReadonly();
  addTask = (task: Task) => {
    this.tasks.update((currTasks) => [...currTasks, task]);
  };
  removeTask = (id: number) => {
    this.tasks.update((currTasks) => currTasks.filter((c) => c.id !== id));
  };
}

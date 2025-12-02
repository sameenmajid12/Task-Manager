import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../../../../core/services/task.service';
import { TaskCard } from '../../components/task-card/task-card';

@Component({
  selector: 'app-task-list',
  imports: [TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList{
  taskService = inject(TaskService)
  taskList = this.taskService.tasks$();
}

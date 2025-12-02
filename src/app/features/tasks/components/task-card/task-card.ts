import { Component, input, OnInit } from '@angular/core';
import { Task } from '../../../../core/models/task.model';
@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard{
  task = input.required<Task>();
}

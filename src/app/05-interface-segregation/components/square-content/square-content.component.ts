import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/02-single-responsibility/services/task.service';
import { Tasks } from '../../interfaces/tasks';

@Component({
  selector: 'app-square-content',
  templateUrl: './square-content.component.html',
  styleUrls: ['./square-content.component.scss'],
})
export class SquareContentComponent implements OnInit, Tasks {
  tasks: { task: string }[] = [{ task: '' }];

  constructor(private taskService: TaskService) {};

  ngOnInit(): void {
    this.tasks = this.taskService.tasks;
  }
}

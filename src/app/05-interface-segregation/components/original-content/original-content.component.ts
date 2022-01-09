import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/02-single-responsibility/services/task.service';
import { Deletable } from '../../interfaces/deletable';
import { Tasks } from '../../interfaces/tasks';

@Component({
  selector: 'app-original-content',
  templateUrl: './original-content.component.html',
  styleUrls: ['./original-content.component.scss'],
})
export class OriginalContentComponent implements OnInit, Tasks, Deletable {
  tasks: { task: string }[] = [{ task: '' }];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.tasks;
  }
  deleteOnClick(index: number): void {
    this.tasks.splice(index, 1);
  }
}

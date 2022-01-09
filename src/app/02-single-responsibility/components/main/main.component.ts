import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  tasks: Array<{ task: string }> = [{ task: '' }];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.tasks;
  }

  deleteOnClick(index: number): void {
    this.tasks.splice(index, 1);
  }
}

import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  list: Array<{ task: string }> = [{ task: '' }];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.list = this.taskService.list;
  }

  deleteOnClick(index: number): void {
    this.list.splice(index, 1);
  }
}

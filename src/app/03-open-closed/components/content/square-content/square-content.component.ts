import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/02-single-responsibility/services/task.service';

@Component({
  selector: 'app-square-content',
  templateUrl: './square-content.component.html',
  styleUrls: ['./square-content.component.scss'],
})
export class SquareContentComponent implements OnInit {
  list: Array<{ task: string }> = [{ task: '' }];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.list = this.taskService.list;
  }
}

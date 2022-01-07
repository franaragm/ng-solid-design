import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/02-single-responsibility/services/task.service';

@Component({
  selector: 'app-original-content',
  templateUrl: './original-content.component.html',
  styleUrls: ['./original-content.component.scss']
})
export class OriginalContentComponent implements OnInit {
  list: Array<{ task: string }> = [{ task: '' }];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.list = this.taskService.list;
  }

  deleteOnClick(index: number): void {
    this.list.splice(index, 1);
  }
}

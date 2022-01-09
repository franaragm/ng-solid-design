import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/02-single-responsibility/services/task.service';
import { SectionBase } from 'src/app/04-liskov-substitution/classes/section-base';
import { Tasks } from '../../interfaces/tasks';

@Component({
  selector: 'app-square-content',
  templateUrl: './square-content.component.html',
  styleUrls: ['./square-content.component.scss'],
})
export class SquareContentComponent
  extends SectionBase
  implements OnInit, Tasks
{
  constructor(private taskService: TaskService) {
    super();
  }

  ngOnInit(): void {
    this.tasks = this.taskService.tasks;
  }
}

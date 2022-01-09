import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/02-single-responsibility/services/task.service';
import { SectionBase } from 'src/app/04-liskov-substitution/classes/section-base';
import { Deletable } from '../../interfaces/deletable';
import { Tasks } from '../../interfaces/tasks';

@Component({
  selector: 'app-original-content',
  templateUrl: './original-content.component.html',
  styleUrls: ['./original-content.component.scss'],
})
export class OriginalContentComponent
  extends SectionBase
  implements OnInit, Tasks, Deletable
{
  constructor(private taskService: TaskService) {
    super();
  }
  ngOnInit(): void {
    this.tasks = this.taskService.tasks;
  }
  override deleteOnClick(index: number): void {
    super.deleteOnClick(index);
    console.log('Task has been deleted.');
  }
}

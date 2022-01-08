import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/02-single-responsibility/services/task.service';
import { SectionBase } from 'src/app/04-liskov-substitution/classes/section-base';

@Component({
  selector: 'app-original-content',
  templateUrl: './original-content.component.html',
  styleUrls: ['./original-content.component.scss'],
})
export class OriginalContentComponent extends SectionBase implements OnInit {
  constructor(private taskService: TaskService) {
    super();
  }
  ngOnInit(): void {
    this.list = this.taskService.list;
  }
}

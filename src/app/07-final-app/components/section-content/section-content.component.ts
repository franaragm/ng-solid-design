import {
  Component,
  ContentChild,
  Input,
  AfterContentInit,
} from '@angular/core';
import { Deletable } from 'src/app/05-interface-segregation/interfaces/deletable';
import { Tasks } from '../../interfaces/tasks';
import { DELETABLE_CONTENT } from '../../tokens/deletable.token';
import { TASKS_CONTENT } from '../../tokens/tasks.token';

@Component({
  selector: 'app-section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.scss'],
})
export class SectionContentComponent implements AfterContentInit {
  @Input() title: string = '';
  @ContentChild(TASKS_CONTENT) taskContent?: Tasks;
  @ContentChild(DELETABLE_CONTENT) deletableContent?: Deletable;

  constructor() {}

  ngAfterContentInit(): void {
    if (this.taskContent) {
      console.log(
        'Testing dependency inversion: \nThis message should only appear as many times as task-content displays there used.'
      );
    }
    if (this.deletableContent) {
      console.log(
        'Testing dependency inversion: \nThis message should only appear as many times as deletable-content displays there used.'
      );
    }
  }
}

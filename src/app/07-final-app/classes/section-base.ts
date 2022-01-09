import { Directive } from '@angular/core';

@Directive()
export class SectionBase {
  tasks: Array<{ task: string }> = [{ task: '' }];

  deleteOnClick(index: number): void {
    this.tasks.splice(index, 1);
  }
}

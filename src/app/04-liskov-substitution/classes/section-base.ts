import { Directive } from '@angular/core';

@Directive()
export class SectionBase {
  list: Array<{ task: string }> = [{ task: '' }];

  deleteOnClick(index: number): void {
    this.list.splice(index, 1);
  }
}

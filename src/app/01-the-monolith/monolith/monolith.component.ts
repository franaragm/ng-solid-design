import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-monolith',
  templateUrl: './monolith.component.html',
  styleUrls: ['./monolith.component.scss'],
})
export class MonolithComponent implements OnInit {
  list = [
    { task: 'Go to the store.' },
    { task: 'Take out the garbage.' },
    { task: 'Go to sleep early.' },
  ];
  form = this.formBuilder.group({
    task: '',
  });
  submitButtonText = 'ADD TODO';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  deleteOnClick(index: number): void {
    this.list.splice(index, 1);
  }

  onSubmit(): void {
    if (this.list.length !== 99) {
      this.list.push(this.form.value);
    }
  }
}

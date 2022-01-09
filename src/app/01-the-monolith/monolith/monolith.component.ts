import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-monolith',
  templateUrl: './monolith.component.html',
  styleUrls: ['./monolith.component.scss'],
})
export class MonolithComponent implements OnInit {
  tasks = [
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
    this.tasks.splice(index, 1);
  }

  onSubmit(): void {
    if (this.tasks.length !== 99) {
      this.tasks.push(this.form.value);
    }
  }
}

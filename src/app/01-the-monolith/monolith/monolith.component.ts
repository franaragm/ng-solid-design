import { Component, OnInit } from '@angular/core';

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
  submitButtonText = "ADD TODO";
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-responsibility',
  templateUrl: './single-responsibility.component.html',
  styleUrls: ['./single-responsibility.component.scss'],
})
export class SingleResponsibilityComponent implements OnInit {
  title: string = 'Phase 2';
  constructor() {}

  ngOnInit(): void {}
}

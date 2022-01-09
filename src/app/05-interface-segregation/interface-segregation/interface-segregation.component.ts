import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface-segregation',
  templateUrl: './interface-segregation.component.html',
  styleUrls: ['./interface-segregation.component.scss'],
})
export class InterfaceSegregationComponent implements OnInit {
  title: string = 'Phase 5';

  constructor() {}

  ngOnInit(): void {}
}

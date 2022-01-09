import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependency-inversion',
  templateUrl: './dependency-inversion.component.html',
  styleUrls: ['./dependency-inversion.component.scss'],
})
export class DependencyInversionComponent implements OnInit {
  title: string = 'Phase 6';

  constructor() {}

  ngOnInit(): void {}
}

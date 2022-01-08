import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liskov-substitution',
  templateUrl: './liskov-substitution.component.html',
  styleUrls: ['./liskov-substitution.component.scss'],
})
export class LiskovSubstitutionComponent implements OnInit {
  title: string = 'Phase 4';

  constructor() {}

  ngOnInit(): void {}
}

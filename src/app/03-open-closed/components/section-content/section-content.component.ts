import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.scss'],
})
export class SectionContentComponent implements OnInit {
  @Input() title: string = '';
  
  constructor() {}

  ngOnInit(): void {}
}

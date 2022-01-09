import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-app',
  templateUrl: './final-app.component.html',
  styleUrls: ['./final-app.component.scss']
})
export class FinalAppComponent implements OnInit {
  title: string = 'A° SOLID TODOs';

  constructor() { }

  ngOnInit(): void {
  }

}

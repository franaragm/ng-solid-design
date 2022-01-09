import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = [
    { task: 'Go to the store.' },
    { task: 'Take out the garbage.' },
    { task: 'Go to sleep early.' },
  ];
  constructor() {}
}

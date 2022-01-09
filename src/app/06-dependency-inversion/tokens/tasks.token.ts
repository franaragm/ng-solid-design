import { Tasks } from 'src/app/05-interface-segregation/interfaces/tasks';
import { InjectionToken } from '@angular/core';

export const TASKS_CONTENT = new InjectionToken<Tasks>('tasks-content');

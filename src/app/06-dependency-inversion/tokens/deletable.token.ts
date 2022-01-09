import { Deletable } from 'src/app/05-interface-segregation/interfaces/deletable';
import { InjectionToken } from '@angular/core';

export const DELETABLE_CONTENT = new InjectionToken<Deletable>(
  'deletable-content'
);

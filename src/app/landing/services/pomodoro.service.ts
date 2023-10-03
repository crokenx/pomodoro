import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PomodoroService {
  start = new BehaviorSubject<boolean>(false);

  constructor() { }
}

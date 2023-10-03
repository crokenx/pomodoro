import { Component, OnDestroy, OnInit } from '@angular/core';
import { PomodoroService } from './services/pomodoro.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {
  start = false;
  subscription?: Subscription;

  constructor(
    private pomodoroService: PomodoroService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.pomodoroService.start.subscribe((start) => {
      this.start = start;
    });
  }

  ngOnDestroy(): void {
    if(!this.subscription) return;
    this.subscription.unsubscribe();
  }
}

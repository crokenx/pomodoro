import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, interval } from 'rxjs';
import { PomodoroService } from '../services/pomodoro.service';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent implements OnInit, OnDestroy {
  interval = interval(1000);
  seconds = new BehaviorSubject(0);
  minutes = new BehaviorSubject(0);
  subscriptions: Subscription[] = [];
  start = false;

  constructor(
    private pomodoroService: PomodoroService,
  ) { }

  ngOnInit(): void {}

  startPomodoro(): void {
    this.subscriptions.push(this.pomodoroService.start.subscribe((start) => {
      if(!start && this.start) {
        this.pausePomodoro();
      }
      this.start = start;
    }));

    this.subscriptions.push(this.interval.subscribe(() => {
      if(this.seconds.value === 59) {
        this.incrementMinutes();
        this.seconds.next(0);
        return;
      }
      this.seconds.next(this.seconds.value + 1);
    }));
  }

  pausePomodoro(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  incrementMinutes(): void {
    if(this.minutes.value >= 24) {
      this.minutes.next(0);
      return;
    }
    this.minutes.next(this.minutes.value + 1);
  }

  flipStart(): void {
    this.pomodoroService.start.next(!this.start);
    this.pomodoroService.start.value ? this.startPomodoro() : this.pausePomodoro();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}

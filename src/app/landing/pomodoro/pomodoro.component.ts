import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent implements OnInit, OnDestroy {
  interval = interval(1000);
  seconds = new BehaviorSubject(0);
  minutes = new BehaviorSubject(0);
  subscription?: Subscription;

  ngOnInit(): void {
    this.subscription = this.interval.subscribe(() => {
      if(this.seconds.value === 59) {
        this.incrementMinutes();
        this.seconds.next(0);
        return;
      }
      this.seconds.next(this.seconds.value + 1);
    });
  }

  incrementMinutes(): void {
    if(this.minutes.value === 25) {
      this.minutes.next(0);
      return;
    }
    this.minutes.next(this.minutes.value + 1);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

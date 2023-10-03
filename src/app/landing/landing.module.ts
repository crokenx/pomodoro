import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { PomodoroService } from './services/pomodoro.service';

@NgModule({
  declarations: [
    LandingComponent,
    PomodoroComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
  ],
  providers: [
    PomodoroService,
  ],
})
export class LandingModule { }

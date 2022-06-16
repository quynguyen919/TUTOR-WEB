import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorSeekingRoutingModule } from './tutor-seeking-routing.module';
import { TutorSeekingComponent } from './tutor-seeking.component';
import { SharedModule } from 'src/app/Shared/shared.module';


@NgModule({
  declarations: [
    TutorSeekingComponent
  ],
  imports: [
    CommonModule,
    TutorSeekingRoutingModule,
    SharedModule
  ]
})
export class TutorSeekingModule { }

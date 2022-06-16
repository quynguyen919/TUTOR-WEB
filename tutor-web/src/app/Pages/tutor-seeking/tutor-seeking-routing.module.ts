import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorSeekingComponent } from './tutor-seeking.component';

const routes: Routes = [{ path: '', component: TutorSeekingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorSeekingRoutingModule { }

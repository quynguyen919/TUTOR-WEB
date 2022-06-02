import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCustomerComponent } from './profile-customer.component';

const routes: Routes = [{ path: '', component: ProfileCustomerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileCustomerRoutingModule { }

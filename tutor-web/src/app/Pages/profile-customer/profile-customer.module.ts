import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileCustomerRoutingModule } from './profile-customer-routing.module';
import { ProfileCustomerComponent } from './profile-customer.component';


@NgModule({
  declarations: [
    ProfileCustomerComponent
  ],
  imports: [
    CommonModule,
    ProfileCustomerRoutingModule
  ]
})
export class ProfileCustomerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileCustomerRoutingModule } from './profile-customer-routing.module';
import { ProfileCustomerComponent } from './profile-customer.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileCustomerComponent
  ],
  imports: [
    CommonModule,
    ProfileCustomerRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class ProfileCustomerModule { }

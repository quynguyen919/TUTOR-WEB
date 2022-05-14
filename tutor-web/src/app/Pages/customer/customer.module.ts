import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from '../customer/customer-routing.module';
import { CustomerComponent } from './customer.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CustomerComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
  
})
export class CustomerModule { }

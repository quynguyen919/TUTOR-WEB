import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  constructor(public customerSV: CustomerService) {
  }

  public customers: any = []
  ngOnInit(): void {
    this.customerSV.getCustomers().subscribe(
      res => {
        this.customers = res
        console.log(res)
      }
    )
  }
}

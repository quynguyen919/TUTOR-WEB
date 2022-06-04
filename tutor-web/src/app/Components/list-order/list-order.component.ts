import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {

  public ListItem: Array<any> = []
  constructor(public orderSV: OrderService) {
    

   }

  ngOnInit(): void {
    console.log(this.orderSV.ListItem);
  }

}

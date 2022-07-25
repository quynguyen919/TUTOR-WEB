import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-tutor-seeking',
  templateUrl: './tutor-seeking.component.html',
  styleUrls: ['./tutor-seeking.component.scss']
})
export class TutorSeekingComponent implements OnInit {

  public ListItem: Array<any> = []
  constructor(public order: OrderService) { }

  ngOnInit(): void {


  }

}

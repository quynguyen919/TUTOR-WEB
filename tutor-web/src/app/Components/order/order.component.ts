import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() item:any;
  @Output() changeEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.item);
  }

}

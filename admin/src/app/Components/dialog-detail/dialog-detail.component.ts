import { Component, OnInit } from '@angular/core';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog-detail',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.scss']
})
export class DialogDetailComponent implements OnInit {
 
  constructor() { }
  
  ngOnInit(): void {
  }

}

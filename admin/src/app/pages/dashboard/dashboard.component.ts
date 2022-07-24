import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { UserService } from 'src/app/services/user.service';
import { DialogDetailComponent } from '../../components/dialog-detail/dialog-detail.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() item: any;
  @Output() changeEvent = new EventEmitter();
  public ListItem: Array<any> = [];
  public ListUser: Array<any> = [];
  public ListOrder: Array<any> = [];



  public d = new Date();
  constructor(public auth: UserService, public firestore: Firestore) {
    let collect = collection(firestore, 'Tutor');
    collectionData(collect, { idField: 'idDoc' }).subscribe((data) => {
      this.ListItem = data;
      console.log(data);
    });
    let collects = collection(firestore, 'User');
    collectionData(collects, { idField: 'idDoc' }).subscribe((data) => {
      this.ListUser = data;
      console.log(data);
    });
    let collected = collection(firestore, 'Order');
    collectionData(collected, { idField: 'idDoc' }).subscribe((data) => {
      this.ListOrder = data;
      console.log(data);
    })
  }


  fullday = this.d.getDate() + '-' + (this.d.getMonth() + 1) + '-' + this.d.getFullYear();
  // public openC(){
  //   this.dialog.open(DialogDetailComponent, { panelClass: 'custom-dialog-container' })
  // }

  ngOnInit(): void {
  }

  async Duyet(Order: any) {
    await Promise.all([, this.auth.deleteOrder(Order.idDoc).toPromise()])
  }

}

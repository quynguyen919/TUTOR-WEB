import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class OrderService {


  public ListItem: Array<any> = []
  constructor(public firestore: Firestore) {
    this.getOrderActive();
  }

  getOrderActive() {
    let collect = collection(this.firestore, 'Order');
    collectionData(collect, { idField: 'idDoc' }).subscribe((data) => {
      this.ListItem = [];
      return data.map((value: any) => {
        if (value.active == true) {
          this.ListItem.push(value);
        }
      })
    })
  }
}

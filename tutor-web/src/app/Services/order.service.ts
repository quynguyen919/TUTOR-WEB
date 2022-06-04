import { Injectable } from '@angular/core';
import { Firestore,collection,collectionData,} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class OrderService {


  public ListItem:Array<any>=[]
  constructor(public firestore:Firestore) {
    let collect=collection(firestore,'Order');
    collectionData(collect,{idField:'idDoc'}).subscribe((data)=>{
      this.ListItem=data;
      console.log(data);
    })
   }
}

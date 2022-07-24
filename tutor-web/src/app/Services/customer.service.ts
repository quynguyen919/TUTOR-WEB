import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { collectionData, collection, Firestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public items: Array<Item> = [];

  constructor(public http: HttpClient, private Firestore: Firestore) { }
  public getDataFromFB(id: string) {
    return this.http.get(environment.endpoint + '/api/custumer/' + id);
  }

  public getCustomers() {
    return collectionData(collection(this.Firestore, 'customer'), { idField: 'id' })
  }
}

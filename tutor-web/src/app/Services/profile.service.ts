import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { collection, Firestore, collectionData } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public Item: Array<item> = [];
  constructor(public http: HttpClient, public firestore: Firestore) { }
  public getProfileDetails(id: string) {
    return this.http.get(environment.endpoint + '/api/profile/' + id);
  }
}
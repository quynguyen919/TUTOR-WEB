import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public items: Array<Item>=[];

  constructor(public http:HttpClient) { }
  public getDataFromFB(apiPath: string) {
    return this.http.get(environment.endpoint+apiPath);
  }
}

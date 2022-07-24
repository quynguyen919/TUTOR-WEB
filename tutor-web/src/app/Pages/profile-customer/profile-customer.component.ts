import { Component, OnInit } from '@angular/core';
import { item } from 'src/app/models/item.model';
import { ProfileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-profile-customer',
  templateUrl: './profile-customer.component.html',
  styleUrls: ['./profile-customer.component.scss']
})
export class ProfileCustomerComponent implements OnInit {

  constructor(public profileSV:ProfileService ) {}

  ngOnInit(): void {
  }

  

}

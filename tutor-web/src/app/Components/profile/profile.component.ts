import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/Services/profile.service';
import { item } from 'src/app/models/item.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public Item!: item;
  constructor(public profileSV: ProfileService) { }

  ngOnInit(): void {
    this.profileSV.getProfileDetails().subscribe(data => {
      this.Item = <item>data;
    }
    );
  }

}

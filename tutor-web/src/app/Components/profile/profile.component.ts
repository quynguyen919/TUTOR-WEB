import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/Services/profile.service';
import { item } from 'src/app/models/item.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public Item!: any;
  constructor(public profileSV: ProfileService, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(res => {
      if (res) {
        this.profileSV.getProfileDetails(res['id']).subscribe(data => {
          console.log(data)
          this.Item = <any>data;
        }
        );
      }
    })

  }

}

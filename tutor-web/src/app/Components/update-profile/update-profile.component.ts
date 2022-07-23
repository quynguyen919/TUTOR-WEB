import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  formContact !: FormGroup;

  constructor(public userSv:UserService, public formBuild: FormBuilder) { 
    this.formContact = this.formBuild.group({
      name: '',  address: '', status: '',salary: '', phoneNumber:'', req:'' ,collect: 'Order'
    })
  }

  ngOnInit(): void {
  }
  public async addOrder() {
    await (await this.userSv.postOrder(this.formContact.value.name,this.formContact.value.status, this.formContact.value.address, this.formContact.value.phoneNumber,this.formContact.value.salary,this.formContact.value.req,this.formContact.value.collect)).subscribe((value: any) => {
      alert(value['message']);
    });
  }

}

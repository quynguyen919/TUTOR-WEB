import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  constructor(public userSv: UserService, public formBuild: FormBuilder) {

  }

  public customerForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    teachingForm: new FormControl(''),
    salary: new FormControl(''),
    phoneNumber: new FormControl(''),
    photoURL: new FormControl(''),
    experience: new FormControl(''),
    Subject: new FormControl(''),
    place: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl(''),
    job: new FormControl(''),
  })

  ngOnInit(): void {
  }
  // public async addOrder() {
  //   await (await this.userSv.postOrder(this.formContact.value.name, this.formContact.value.status, this.formContact.value.address, this.formContact.value.phoneNumber, this.formContact.value.salary, this.formContact.value.req, this.formContact.value.collect)).subscribe((value: any) => {
  //     alert(value['message']);
  //   });
  // }

  capNhat() {
    this.userSv.addCus(this.customerForm.value).subscribe(
      res => {
        alert("Cập nhật thành công");
      }
    )
  }

}

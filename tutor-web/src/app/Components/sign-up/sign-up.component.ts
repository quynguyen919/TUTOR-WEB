import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../sign-in/sign-in.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Firestore } from 'firebase/firestore';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  formupdate !: FormGroup;
  constructor(public dialog : MatDialog,public userSv:UserService, public formBuild: FormBuilder) {
    this.formupdate = this.formBuild.group({
      name: '', email: '',  collect: ''
    })
   }
  ngOnInit(): void {
  }
  public open(){
    this.dialog.open(SignInComponent, { panelClass: 'custom-dialog-container' })

}
public async addData() {
  await (await this.userSv.postData(this.formupdate.value.name, this.formupdate.value.email, this.formupdate.value.collect,)).subscribe((value: any) => {
    alert(value['message']);
  });
}
}

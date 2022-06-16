import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { UserService } from 'src/app/Services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  formupdate !: FormGroup;
   
  constructor(public auth: UserService,public dialog : MatDialog,public formBuild: FormBuilder) { 
    this.formupdate = this.formBuild.group({
      name: '', email: '',  collect: '' , password:''
  })
}
  ngOnInit(): void {
  }
  public open(){
    this.dialog.open(SignUpComponent, { panelClass: 'custom-dialog-container' })
  }
 

  onCloseConfirm() {
    setTimeout(() => {
      this.dialog.closeAll();
    }, 1200);
  }
  public async onSignIp(email:string,password:string){
    await (await this.auth.signIn(email,password))
  }
}

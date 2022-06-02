import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(public auth: UserService,public dialog : MatDialog) { }
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
}

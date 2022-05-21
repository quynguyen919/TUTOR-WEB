import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { Firestore } from '@angular/fire/firestore';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(public auth: Auth,public dialog : MatDialog) { }
  public user: any;
  ngOnInit(): void {
  }
  public open(){
    this.dialog.open(SignUpComponent, { panelClass: 'custom-dialog-container' })
  }
 
  public checkAuth(): boolean {
    if (!this.user) {
      return false;
    }
    return true;
  }
  public async login() {
    return await signInWithPopup(this.auth, new GoogleAuthProvider());
  }
}

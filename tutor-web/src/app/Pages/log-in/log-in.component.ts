import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/Services/user.service';
import { SignInComponent } from '../../Components/sign-in/sign-in.component';
import { SignUpComponent } from '../../Components/sign-up/sign-up.component';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(public dialog : MatDialog,public auth: UserService) { }

  ngOnInit(): void {
  }

  public open(){
    this.dialog.open(SignUpComponent, { panelClass: 'custom-dialog-container' })
  }
  public openSI(){
    this.dialog.open(SignInComponent, { panelClass: 'custom-dialog-container' })
  }
}

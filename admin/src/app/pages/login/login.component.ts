import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formupdate !: FormGroup;
  constructor(public auth: UserService,public formBuild: FormBuilder) { 
    this.formupdate = this.formBuild.group({
      name: '', email: '',  collect: '' , password:''
  })
  }

  ngOnInit(): void {
  }
  
  public async onSignIp(email:string,password:string){
    await (await this.auth.signIn(email,password))
  }
}

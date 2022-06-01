import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Auth, GoogleAuthProvider,authState, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: any;

  constructor(public http:HttpClient,public auth:Auth) {
    if(auth){
      authState(this.auth).subscribe((temp:any)=>{
         this.user=temp;
       });
      
     }
   }
  public async postData(name:string,email:string,collectName:string){
    return this.http.post(environment.endpoint+'/api',{data:{name:name,email:email,},collectionName:collectName});
   }
   public async login() {
    return await signInWithPopup(this.auth, new GoogleAuthProvider());
  }
}

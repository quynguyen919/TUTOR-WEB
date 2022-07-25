import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Auth, getAuth, GoogleAuthProvider, authState, signInWithPopup, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { createUserWithEmailAndPassword } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: any;
  isLoggined = false;
  constructor(public http: HttpClient, public auth: Auth) {
    if (auth) {
      authState(this.auth).subscribe((temp: any) => {
        this.user = temp;
      });

    }
  }
  public async postData(name: string, email: string, collectName: string) {
    return this.http.post(environment.endpoint + '/api', { data: { name: name, email: email, }, collectionName: collectName });
  }
  public async postOrder(name: string, status: string, address: string, phoneNumber: string, salary: number, req: string, collectName: string) {
    return this.http.post(environment.endpoint + '/api', { data: { name: name, status: status, address: address, phoneNumber: phoneNumber, salary: salary, req: req, active: false }, collectionName: collectName });
  }

  public addCus(value: any) {
    return this.http.post(environment.endpoint + "/api/create-customer", value);
  }

  public async login() {
    return await signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  public async signIn(email: string,
    password: string) {

    await signInWithEmailAndPassword(this.auth, email, password)
      .then(res => {
        this.isLoggined = true
        localStorage.setItem('user', JSON.stringify(res.user))
      })


  }

  public async signUp(email: string,
    password: string) {
    await createUserWithEmailAndPassword(this.auth, email, password)
      .then(res => {
        this.logout()
      })
  }
  public async logout() {
    return await signOut(this.auth);

  }
}

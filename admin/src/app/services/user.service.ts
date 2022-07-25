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
  // public async postData(name:string,email:string,collectName:string){
  //   return this.http.post(environment.endpoint+'/api',{data:{name:name,email:email,},collectionName:collectName});
  //  }
  //  public async postOrder(name:string,status:string,address:string,phoneNumber:string,salary:number,req:string,collectName:string){
  //   return this.http.post(environment.endpoint+'/api',{data:{name:name,status:status,address:address,phoneNumber:phoneNumber,salary:salary,req:req},collectionName:collectName});
  //  }
  //  public async login() {
  //   return await signInWithPopup(this.auth, new GoogleAuthProvider());
  // }
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

  public createCustomer(order: any) {
    const customer = {
      id: Date.now().toString(),
      Subject: "Toán, Văn",
      experience: "Từng dạy ở các trường đại học, thpt,... Có nhiều năm kinh nghiệm.",
      name: order.name,
      photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx2bShRepJcL25yDQ-YCZEMsFHgYelhwHwtA&usqp=CAU",
      place: order.address
    }
    return this.http.post("http://localhost:3000/api/create-customer", customer)
  }

  public updateOrder(id: any) {
    return this.http.put("http://localhost:3000/api/update-order", {
      id
    });
  }

  public deleteOrder(id: string) {
    return this.http.delete(`http://localhost:3000/api/delete-order/${id}`)
  }

}

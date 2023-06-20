import {EventEmitter, Injectable, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from "../model/User";
import {Category} from "../model/Category";
import {Cart} from "../model/Cart";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseURL: string = 'http://localhost:8081/user';
  ownerDataStream: any;
  $logedIn = new EventEmitter();
  user1:User;

  constructor(private httpClient: HttpClient) {
    this.ownerDataStream = new BehaviorSubject<any>(null);
  }

  findAllUser() {
    return this.httpClient.get<User[]>(this.baseURL);
  }

  updateUser(user: User) {
    console.log(user);
    return this.httpClient.post(
      'http://localhost:8081/user/update',
      JSON.stringify(user),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    );
  }

  deleteUser(user: User) {
    console.log(user);
    let credentials = { name: user.name, id: user.id};
    return this.httpClient.post(
      'http://localhost:8081/user/delete',
      JSON.stringify(credentials),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    );
  }

  public login(user: User) {
    //console.log(user.id)
    let credentials = { name: user.name, password: user.password };
    return this.httpClient.post(
      'http://localhost:8081/user/login',
      JSON.stringify(credentials),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    );
  }

  getId(user: User) {
    return this.httpClient.post(
      'http://localhost:8081/user/getId',
      JSON.stringify(user),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    ).subscribe(res=>
    {console.log(res.body)
      this.$logedIn.emit(res.body);
      // @ts-ignore
      this.user1=res.body;
      // @ts-ignore
      this.setToken(this.user1.cart_id.toString());
      // @ts-ignore
      this.setToken1(this.user1.id.toString());
    });
  }

  addUser(username: string, usermail: string, userauth: string, userpass: string) {
    let user = {name:username,password:userpass,auth:userauth,mail:usermail}
    console.log(user)
    return this.httpClient.post(
      'http://localhost:8081/user/adduser',
      JSON.stringify(user),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    );
  }

  private setToken(id: string) {
   // console.log(id)
    localStorage.setItem('id',id);
  }

  private setToken1(user: string) {
    //console.log(user)
    localStorage.setItem('user',user);
  }

  public logIn(id: number | undefined) {
    //console.log(localStorage.getItem('user'))
    return this.httpClient.post(
      'http://localhost:8081/log/addlogin',
      JSON.stringify(id),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    ).subscribe(res=>{});
  }

  public logOut() {
    return this.httpClient.post(
      'http://localhost:8081/log/addlogout',
      JSON.stringify(localStorage.getItem('user')),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    ).subscribe(res=>{});
  }

  export() {
    return this.httpClient.post(
      'http://localhost:8081/user/xml',
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    );
  }
}

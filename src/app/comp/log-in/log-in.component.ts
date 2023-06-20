import {Component, EventEmitter, OnInit, Output} from '@angular/core';
;
import {UserService} from "../../services/user.service";
import {User} from "../../model/User";
import {Router} from "@angular/router";
import {AuthService} from "../../auth.service";
import {UserDTO} from "../../model/UserDTO";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']

})
export class LogInComponent implements OnInit{
  user:User = new User();
  user1:User = new User();
  i:number;
  constructor(
    private userService: UserService,
    private router: Router,
    public auth:AuthService,

  ) {}

   ngOnInit(): void {
   }

   logIn(){
     const name = (<HTMLInputElement>document.getElementById('username')).value;
     const password =(<HTMLInputElement>document.getElementById('password')).value;
     if(name){
       const usr = new UserDTO();
       usr.username=name;
       usr.password=password;
       this.auth.logIn(usr);
     }
   }

   authcheck(){
      if(this.user.auth?.includes("ADMIN")) this.router.navigate(['admin']);
        else if(this.user.auth?.includes("USER")) this.router.navigate(['user']);
   }

  submit(){
    this.userService.login(this.user).subscribe(res=> {
      // @ts-ignore
      this.user1=res.body;
      this.user.auth = this.user1.auth;
      this.authcheck();
      this.login(this.user1.id);
    });
  }

  validateForm() {
    let x = (<HTMLInputElement>document.getElementById('username')).value;
    console.log(x);
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  validateForm1() {
    let x = (<HTMLInputElement>document.getElementById('password')).value;
    console.log(x);
    if (x == "") {
      alert("Password must be filled out");
      return false;
    }
  }

  getId(){
    this.userService.getId(this.user);
  }

  User() {
    // @ts-ignore
    return this.auth.userData.username;
  }

  logOut() {
    this.userService.logOut();
  }

  login(id: number | undefined) {
    this.userService.logIn(id);
  }
}

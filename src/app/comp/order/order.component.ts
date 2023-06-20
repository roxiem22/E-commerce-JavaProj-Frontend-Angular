import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {OrderService} from "../../services/order.service";
import {Order} from "../../model/Order";
import {CartService} from "../../services/cart.service";
import {AuthService} from "../../auth.service";
import {UserService} from "../../services/user.service";
import {PaymentService} from "../../services/payment.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit{
  order1:Order[]=[];
  id:number;
  constructor(private router: Router,
              private orderService: OrderService,
              private cartService: CartService,
              public auth: AuthService,
              private user:UserService,
              private paymentService:PaymentService,
              ) {
  }
  details() {
    this.router.navigate(['details']);
  }
  sendDetails(){
    var name = (<HTMLInputElement>document.getElementById('fname')).value;
    var email = (<HTMLInputElement>document.getElementById('email')).value;
    var address = (<HTMLInputElement>document.getElementById('adr')).value;
    var city = (<HTMLInputElement>document.getElementById('city')).value;
    var state = (<HTMLInputElement>document.getElementById('state')).value;
    var zip = (<HTMLInputElement>document.getElementById('zip')).value;

    this.orderService.sendDetails(name,email,address,city,state,zip,localStorage.getItem('id'));
  }

  sendPayment(){
    var name = (<HTMLInputElement>document.getElementById('cname')).value;
    var card = (<HTMLInputElement>document.getElementById('ccnum')).value;
    var m = (<HTMLInputElement>document.getElementById('expmonth')).value;
    var y = (<HTMLInputElement>document.getElementById('expyear')).value;
    var cvv = (<HTMLInputElement>document.getElementById('cvv')).value;

    this.paymentService.sendPayment(name,card,m,y,cvv,localStorage.getItem('id'));
  }
  ngOnInit(): void {
  }

  logOut() {
    this.user.logOut();
  }

  orderValidation() {
    var name = (<HTMLInputElement>document.getElementById('fname')).value;
    var email = (<HTMLInputElement>document.getElementById('email')).value;
    var address = (<HTMLInputElement>document.getElementById('adr')).value;
    var city = (<HTMLInputElement>document.getElementById('city')).value;
    var state = (<HTMLInputElement>document.getElementById('state')).value;
    var zip = (<HTMLInputElement>document.getElementById('zip')).value;

    var name1 = (<HTMLInputElement>document.getElementById('cname')).value;
    var card = (<HTMLInputElement>document.getElementById('ccnum')).value;
    var m = (<HTMLInputElement>document.getElementById('expmonth')).value;
    var y = (<HTMLInputElement>document.getElementById('expyear')).value;
    var cvv = (<HTMLInputElement>document.getElementById('cvv')).value;

    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    if (address == "") {
      alert("Address must be filled out");
      return false;
    }
    if (city == "") {
      alert("City must be filled out");
      return false;
    }
    if (state == "") {
      alert("State must be filled out");
      return false;
    }
    if (zip == "") {
      alert("Zip must be filled out");
      return false;
    }
    if (name1 == "") {
      alert("Name must be filled out");
      return false;
    }
    if (card == "") {
      alert("Card must be filled out");
      return false;
    }
    if (m == "") {
      alert("Month must be filled out");
      return false;
    }
    if (y == "") {
      alert("Year must be filled out");
      return false;
    }
    if (cvv == "") {
      alert("CVV must be filled out");
      return false;
    }
  }
}

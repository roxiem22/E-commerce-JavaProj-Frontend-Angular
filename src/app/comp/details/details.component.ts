import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../services/order.service";
import {Order} from "../../model/Order";
import {Product} from "../../model/Product";
import {AuthService} from "../../auth.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  orderL: Order;
  x:number=0;
  constructor(private orderService:OrderService,
              public auth:AuthService,
              private user:UserService,
              private router: Router,
              ){}
  ngOnInit(): void {
    this.show()
  }

  show() {
    this.orderService.$order.subscribe(res=>{
      this.orderL = res;
      console.log(this.orderL.cart)
    })
  }

  logOut() {
    this.user.logOut();
  }
}

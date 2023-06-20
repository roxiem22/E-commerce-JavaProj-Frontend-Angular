import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../model/Product";
import {Router, Routes} from "@angular/router";
import {OrderService} from "../../services/order.service";
import {AuthService} from "../../auth.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  productList: Product[] = [];
   prod: Product[] = [];
  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router:Router,
    public auth:AuthService,
    private userService:UserService,
  ){}

  ngOnInit(): void {
    this.cartService.$cart.subscribe(res=>{
      this.productList = res;
      console.log(res);
    })
  }


  refresh() {
    this.productList = this.prod;
  }

  deleteProd(item: Product) {
    this.cartService.deleteProdCart(item).subscribe(res=>{
      console.log(res.body)
      // @ts-ignore
      this.prod = res.body;
    });
  }

  goBack() {
    this.router.navigate(['user']);
  }

  order() {
    this.router.navigate(['order']);
  }

  logOut() {
    this.userService.logOut();
  }
}

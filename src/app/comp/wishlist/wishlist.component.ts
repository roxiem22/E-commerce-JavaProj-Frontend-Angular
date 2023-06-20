import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/Product";
import {WishlistService} from "../../services/wishlist.service";
import {Router} from "@angular/router";
import {AuthService} from "../../auth.service";
import {UserService} from "../../services/user.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
  productList: Product[] = [];
  prod: Product[] = [];
  constructor(
    private wishlistService: WishlistService,
    private cart:CartService,
    private router: Router,
    public auth: AuthService,
    private user:UserService,
  ) {
  }
  ngOnInit(): void {
    this.wishlistService.$wishlist.subscribe(res=>{
      this.productList=res;
      console.log(res);
    })
  }

  deleteProd(item: Product) {
    this.wishlistService.deleteProdWishlist(item).subscribe(res=>{
      console.log(res.body)
      // @ts-ignore
      this.prod = res.body;
    });
  }

  refresh() {
    this.productList = this.prod;
  }

  goBack() {
    this.router.navigate(['user']);
  }

  logOut() {
    this.user.logOut();
  }

  cartProd(item: Product) {
    this.cart.addProdToCart(item);
  }
}

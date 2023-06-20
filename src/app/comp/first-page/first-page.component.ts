import {Component, Input, OnInit} from '@angular/core';
import { Product } from '../../model/Product';
import { ProductService } from '../../services/product.service';
import {Category} from "../../model/Category";
import {CategoryService} from "../../services/category.service";
import {CartService} from "../../services/cart.service";
import {UserService} from "../../services/user.service";
import {User} from "../../model/User";
import {WishlistService} from "../../services/wishlist.service";
import {Router} from "@angular/router";
import {AuthService} from "../../auth.service";
import {UserDTO} from "../../model/UserDTO";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
})
export class FirstPageComponent implements OnInit {
  productList: Product[] = [];
  prodList: Product[] = [];
  categList: Category[] = [];
  user: User;
  pList: Product[]=[];
  priceA: string="Crescator";
  priceD: string="Descrescator";

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private categoryService: CategoryService,
    private userService: UserService,
    private wishlistService: WishlistService,
    private router: Router,
    public auth:AuthService
  ) {}

  ngOnInit(): void {
    this.submit1();
    this.userService.$logedIn.subscribe(res=>{
      this.user=res;
      console.log(this.user)
    })
  }

  func1(){
    this.prodList = this.productList;
  }

  submit(){
    console.log(this.categList)
    this.categoryService.getAllCateg().subscribe(res=>{
      this.categList=res;
    });
  }

  getSortA(){
    this.productService.getSortA().subscribe(res=>{
      this.prodList = res;
    });
  }

  getSortD(){
    this.productService.getSortD().subscribe(res=>{
      this.prodList = res;
    });
  }

  submit1(){
    this.productService.getAllProd().subscribe(
      (res) => {
        this.prodList = res;
        this.pList=res;
      }
    );
  }

  func(id: number){
    this.productService.getAllProdByCateg(id).subscribe(res=>{
      this.productList=res;
      console.log(this.productList)
    });
  }

  addToCart(item: Product){
    this.cartService.addInCart(item,this.user).subscribe(res=>{});
  }

  addToWishlist(item: Product){
    this.wishlistService.addInWishlist(item,this.user).subscribe(res=>{});
  }

  cart() {
    this.cartService.cartClick(this.user);
  }

  wishlist() {
    this.wishlistService.wishlistClick(this.user);
  }

  toWishlist() {
    this.router.navigate(['wishlist']);
  }

  toCart() {
    this.router.navigate(['cart']);
  }

  search() {
    var result = (<HTMLInputElement>document.getElementById('bar')).value;
    this.productService.getProductByName(result).subscribe(res=>{
      console.log(res)
      this.prodList = res;
    });
  }

  refresh() {
    this.prodList=this.pList;
  }

  goBack() {
    this.router.navigate(['login']);
  }

  logOut() {
    this.userService.logOut();
  }

  chat() {
    this.router.navigate(['chat']);
  }
}

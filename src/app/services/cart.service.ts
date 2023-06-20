import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/Product";
import {User} from "../model/User";
import {Cart} from "../model/Cart";

@Injectable({
  providedIn: 'root',
})

export class CartService{
  baseURL: string = 'http://localhost:8081/cart';
  cart:Cart = new Cart();
  prods:Product[]=[];
  x:string | undefined;
  $cart = new EventEmitter();
  //$user = new EventEmitter();
  senditem:String|undefined;
  send:String|undefined;
  user_id:number | undefined;
  constructor(private httpClient: HttpClient) {}

  addInCart(product: Product, user: User){
    this.x = product.id + " " + user.id + " " + product.category_id;
    return this.httpClient.post(
      'http://localhost:8081/cart/add',
      JSON.stringify(this.x),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    );
  }

  cartClick(user: User) {
    console.log(user)
    this.user_id = user.id;
    return this.httpClient.post(
      'http://localhost:8081/cart/get',
      JSON.stringify(user.id),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    ).subscribe(res=>{
      console.log(res.body)
      this.$cart.emit(res.body);
    });
  }
  deleteProdCart(item: Product) {
    this.senditem = item.id + " " + this.user_id;
    return this.httpClient.post(
      'http://localhost:8081/cart/delete',
      JSON.stringify(this.senditem),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    )
  }

  addProdToCart(item: Product) {
    this.send = localStorage.getItem("id") + " " + item.id;
    console.log(this.send);
    return this.httpClient.post(
      'http://localhost:8081/cart/addProd',
      JSON.stringify(this.send),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    ).subscribe(res=>{
      this.$cart.emit(res.body);
    })
  }
}

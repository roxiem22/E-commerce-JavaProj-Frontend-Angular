import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../model/User";
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root',
})

export class WishlistService{
  baseURL: string = 'http://localhost:8081/wishlist';
  $wishlist = new EventEmitter();
  x:string;
  user_id:number | undefined;
  senditem:String|undefined;
  constructor(private httpClient: HttpClient) {}

  addInWishlist(product: Product, user: User){
    this.x = product.id + " " + user.id + " " + product.category_id;
    console.log(this.x)
    return this.httpClient.post(
      'http://localhost:8081/wishlist/add',
      JSON.stringify(this.x),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    );
  }

  wishlistClick(user: User) {
    console.log(user)
    this.user_id= user.id;
    return this.httpClient.post(
      'http://localhost:8081/wishlist/get',
      JSON.stringify(user.id),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    ).subscribe(res=>{
      console.log(res.body)
      this.$wishlist.emit(res.body);
    });
  }

  deleteProdWishlist(item: Product) {
    this.senditem = item.id + " " + this.user_id;
    return this.httpClient.post(
      'http://localhost:8081/wishlist/delete',
      JSON.stringify(this.senditem),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    )
  }
}

import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Order} from "../model/Order";

@Injectable({
  providedIn: 'root',
})
export class OrderService{
  $order=new EventEmitter();
  order: Order;
  baseURL: string = 'http://localhost:8081/order';

  constructor(private httpClient: HttpClient) {}

  sendDetails(name: string, email: string, address: string, city: string, state: string, zip: string, item: string | null) {
    let order = {name:name,email:email,address:address,city:city,state:state,zip:zip,id:item}
    console.log(order)
    return this.httpClient.post(
      'http://localhost:8081/order/add',
      JSON.stringify(order),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    ).subscribe(res=>{
      this.$order.emit(res.body);
    });
  }
}

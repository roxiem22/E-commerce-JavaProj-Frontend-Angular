import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class PaymentService{
  $p=new EventEmitter();
  baseURL: string = 'http://localhost:8081/payment';

  constructor(private httpClient: HttpClient) {}

  sendPayment(name: string, card: string, m: string, y: string, cvv: string, item: string | null) {
    let p = {name:name,card:card,month:m,year:y,cvv:cvv,id:item}
    console.log(p)
    return this.httpClient.post(
      'http://localhost:8081/payment/add',
      JSON.stringify(p),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    ).subscribe(res=>{
      console.log(res);
      this.$p.emit(res.body);
    });
  }
}

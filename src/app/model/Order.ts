import {Cart} from "./Cart";

export class Order{
  id: number|undefined;
  name: string|undefined;
  email: string|undefined;
  address: string|undefined;
  state: string|undefined;
  city: string|undefined;
  zip: string|undefined;
  cart: Cart|undefined;
}

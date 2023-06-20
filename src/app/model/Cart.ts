import {Product} from "./Product";
import {User} from "./User";

export class Cart{
  id: number | undefined;
  products: Product[] | undefined;
  user: User | undefined;
}

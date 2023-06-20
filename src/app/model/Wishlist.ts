import {Product} from "./Product";
import {User} from "./User";

export class Wishlist{
  id: number;
  products: Product[] | undefined;
  user: User | undefined;
}

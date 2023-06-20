import {Product} from "./Product";

export class Category {
  id: number;
  name: string | undefined;
  products: Product[] | undefined;
}

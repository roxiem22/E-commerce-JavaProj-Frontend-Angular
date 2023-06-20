import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../model/Product';
import {Category} from "../model/Category";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseURL: string = 'http://localhost:8081/product';

  constructor(private httpClient: HttpClient) {}

  getAllProd() {
    return this.httpClient.get<Product[]>(this.baseURL);
  }

  getAllProdByCateg(id:number) {
    //console.log(id)
    let params = new HttpParams().set('id', id);
    return this.httpClient.get<Product[]>(this.baseURL + '/byCategId',{ params: params });
  }

  getProdById(id: number) {
    let params = new HttpParams().set('id', id);
    return this.httpClient.get(this.baseURL + '/findById', { params: params });
  }

  getProdByName(name: string) {
    return this.httpClient.get(this.baseURL + '/find/' + name);
  }

  deleteProd(product: Product) {
    console.log(product);
    let credentials = { name: product.name,id:product.id,category_id:product.category_id};
    return this.httpClient.post(
      'http://localhost:8081/product/delete',
      JSON.stringify(credentials),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    );
  }

  updateProd(product: Product) {
    console.log(product);
    return this.httpClient.post(
      'http://localhost:8081/product/update',
      JSON.stringify(product),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    );
  }

  addProd(prodname: string, prodprice: number , proddesc: string,prodcateg:number) {
    let prod = {name:prodname,price:prodprice,description:proddesc,category_id:prodcateg}
    console.log(prod)
    return this.httpClient.post(
      'http://localhost:8081/product/addproduct',
      JSON.stringify(prod),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    );
  }

  getProductByName(result: string) {
    let params = new HttpParams().set('result', result);
    console.log(params)
    return this.httpClient.get<Product[]>(this.baseURL + '/findByName',{ params: params });
  }

  getSortD() {
    return this.httpClient.get<Product[]>(this.baseURL + '/sortByPriceDesc');
  }

  getSortA() {
    return this.httpClient.get<Product[]>(this.baseURL + '/sortByPriceAsc');
  }
}

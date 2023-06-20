import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Category } from '../model/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  baseURL: string = 'http://localhost:8081/category';

  constructor(private httpClient: HttpClient) {}

  getAllCateg() {
    return this.httpClient.get<Category[]>(this.baseURL);
  }

  getCategById(id: number) {
    let params = new HttpParams().set('id', id);
    return this.httpClient.get(this.baseURL + '/findById', { params: params });
  }

  getCategByName(name: string) {
    return this.httpClient.get(this.baseURL + '/find/' + name);
  }

  updateCateg(category: Category) {
    console.log(category);
    return this.httpClient.post(
      'http://localhost:8081/category/update',
      JSON.stringify(category),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    );
  }

  deleteCateg(category: Category) {
    console.log(category);
    let credentials = { name: category.name, id: category.id, products: category.products};
    return this.httpClient.post(
      'http://localhost:8081/category/delete',
      JSON.stringify(credentials),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    );
  }

  addCateg(categname: string) {
    let categ = {name:categname}
    console.log(categ)
    return this.httpClient.post(
      'http://localhost:8081/category/addcategory',
      JSON.stringify(categ),
      { headers: { 'Content-Type': 'application/json' }, observe: 'response' }
    );
  }
}

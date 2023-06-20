import { Component } from '@angular/core';
import {Product} from "../../model/Product";
import {Category} from "../../model/Category";
import {ProductService} from "../../services/product.service";
import {CategoryService} from "../../services/category.service";
import {User} from "../../model/User";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  productsList: Product[] = [];
  userList: User[] = [];
  categList: Category[] = [];
  categup: Category = new Category();
  userup: User = new User();
  produp: Product=new Product();

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {

    this.productService.getAllProd().subscribe(
      (res) => {
        console.log(res);
        this.productsList = res;
        this.submit();
        this.submit1();
      },
      (_error) => {}
    );
  }

  submit(){

    this.categoryService.getAllCateg().subscribe(res=>{
      this.categList=res;
    });
  }

  submit1(){

    this.userService.findAllUser().subscribe(res=>{
      this.userList=res;
    });
  }

  delete(item: Category){
    this.categoryService.deleteCateg(item).subscribe(res=>{});
  }

  delete1(item: Product){
    console.log(item)
    this.productService.deleteProd(item).subscribe(res=>{});
  }

  delete2(item: User){
    this.userService.deleteUser(item).subscribe(res=>{});
  }

  update(item: Category){
    this.categoryService.updateCateg(item).subscribe(res=>{});
  }

  update1(item: Product){
    this.productService.updateProd(item).subscribe(res=>{});
  }

  update2(item: User){
    this.userService.updateUser(item).subscribe(res=>{});
  }

  adduser() {
    var username = (<HTMLInputElement>document.getElementById('fname')).value;
    var userpass = (<HTMLInputElement>document.getElementById('pass')).value;
    var usermail = (<HTMLInputElement>document.getElementById('mail')).value;
    var userauth = (<HTMLInputElement>document.getElementById('auth')).value;
    this.userService.addUser(username,usermail,userauth,userpass).subscribe(res=>{});
  }

  addproduct() {
    var prodname = (<HTMLInputElement>document.getElementById('cname')).value;
    var prodprice = parseInt((<HTMLInputElement>document.getElementById('price')).value);
    var proddesc = (<HTMLInputElement>document.getElementById('descr')).value;
    var prodcateg = parseInt((<HTMLInputElement>document.getElementById('categ')).value);
    this.productService.addProd(prodname,prodprice,proddesc,prodcateg).subscribe(res=>{
    });
  }

  addcategory() {
    var categname = (<HTMLInputElement>document.getElementById('name')).value;
    this.categoryService.addCateg(categname).subscribe(res=>{});
  }

  export() {
    this.userService.export().subscribe(res=>{});
  }

  validateUserForm() {
    var username = (<HTMLInputElement>document.getElementById('fname')).value;
    var userpass = (<HTMLInputElement>document.getElementById('pass')).value;
    var usermail = (<HTMLInputElement>document.getElementById('mail')).value;
    var userauth = (<HTMLInputElement>document.getElementById('auth')).value;
    console.log(username);
    if (username == "") {
      alert("Name must be filled out");
      return false;
    }
    if (userpass == "") {
      alert("Password must be filled out");
      return false;
    }
    if (usermail == "") {
      alert("Email must be filled out");
      return false;
    }
    if (userauth == "") {
      alert("Auth must be filled out");
      return false;
    }
  }

  validateProdForm(){
    var prodname = (<HTMLInputElement>document.getElementById('cname')).value;
    var prodprice = parseInt((<HTMLInputElement>document.getElementById('price')).value);
    var prodcateg = parseInt((<HTMLInputElement>document.getElementById('categ')).value);

    if (prodname == "") {
      alert("Name must be filled out");
      return false;
    }
    if (prodprice <= 0) {
      alert("Price must be greater then 0");
      return false;
    }
    if (prodcateg == null) {
      alert("Category must be filled out");
      return false;
    }
  }

  validateCategForm(){
    var categname = (<HTMLInputElement>document.getElementById('name')).value;
    if (categname == "") {
      alert("Name must be filled out");
      return false;
    }
  }

}


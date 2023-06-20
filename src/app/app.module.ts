import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './comp/first-page/first-page.component';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { LogInComponent } from './comp/log-in/log-in.component';
import { AdminComponent } from './comp/admin/admin.component';
import { UserRoutingModule } from './comp/first-page/first-page.routing.component';
import { LoginRoutingModule } from './comp/log-in/login.routing.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { WishlistComponent } from './comp/wishlist/wishlist.component';
import { CartComponent } from './comp/cart/cart.component';
import { OrderComponent } from './comp/order/order.component';
import {CartRoutingModule} from "./comp/cart/cart.routing.component";
import { DetailsComponent } from './comp/details/details.component';
import {OrderRoutingModule} from "./comp/order/order.routing.component";
import {AuthService} from "./auth.service";
import { ChatComponent } from './comp/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    LogInComponent,
    AdminComponent,
    WishlistComponent,
    CartComponent,
    OrderComponent,
    DetailsComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    UserRoutingModule,
    LoginRoutingModule,
    MatButtonToggleModule,
    CartRoutingModule,
    OrderRoutingModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstPageComponent} from "./first-page.component";
import {LogInComponent} from "../log-in/log-in.component";
import {CartComponent} from "../cart/cart.component";
import {WishlistComponent} from "../wishlist/wishlist.component";
import {ChatComponent} from "../chat/chat.component";

const routes: Routes = [
  {path:'cart',component:CartComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'login',component:LogInComponent},
  {path:'chat',component:ChatComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

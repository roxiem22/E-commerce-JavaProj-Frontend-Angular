import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstPageComponent} from "../first-page/first-page.component";
import {LogInComponent} from "../log-in/log-in.component";
import {AdminComponent} from "../admin/admin.component";

const routes: Routes = [
  {path:'user',component:FirstPageComponent},
  {path:'admin',component:AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

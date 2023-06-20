import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstPageComponent} from "./comp/first-page/first-page.component";
import {LogInComponent} from "./comp/log-in/log-in.component";

const routes: Routes = [
  {path:'login',component:LogInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

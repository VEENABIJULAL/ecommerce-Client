import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {
    path:'' , component:LoginComponent
  },
  {
    path:'dashboard' , component:DashboardComponent
  },
  {
    path:'addproduct' , component:AddproductComponent 
  },
  {
    path:'register' , component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

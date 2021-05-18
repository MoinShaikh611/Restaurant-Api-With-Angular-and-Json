import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'add',component:AddRestaurantComponent},
  {path:'update/:id',component:UpdateRestaurantComponent},
  {path:'list',component:ListRestaurantComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'/list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PreventLoggedInAcess } from './guards/PreventLoggedInAcess.guard';

const routes: Routes = [
  {path:'add',component:AddRestaurantComponent,canActivate:[AuthGuard]},
  {path:'update/:id',component:UpdateRestaurantComponent,canActivate:[AuthGuard]},
  {path:'list',component:ListRestaurantComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent,canActivate:[PreventLoggedInAcess]},
  {path:'register',component:RegisterComponent,canActivate:[PreventLoggedInAcess]},
  {path:'',redirectTo:'/list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

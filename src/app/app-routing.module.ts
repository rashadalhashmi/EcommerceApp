import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductdetailsComponent } from './components/Product/productdetails/productdetails.component';
import { ProductsofcategoryComponent } from './components/Product/productsofcategory/productsofcategory.component';
import { CheckoutComponent } from './components/users/checkout/checkout.component';
import { LoginComponent } from './components/users/login/login.component';
import { UserActionComponent } from './components/users/user-action/user-action.component';
import { UserAuthGuard } from './security/user-auth.guard';

const routes: Routes = [
  { path: '', redirectTo:'/Home' , pathMatch: 'full' },
  { path: 'Home', component: HomeComponent},
  {path:"Cart",component:CartComponent},
  { path: 'Product/:PID', component: ProductdetailsComponent},
  { path: 'Product/Category/:CID', component: ProductsofcategoryComponent},
  { path: 'User',loadChildren:()=>import('../app/components/users/user-auth.module').then(m=>m.UserAuthModule)},
  { path: '**', redirectTo: '/Home' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

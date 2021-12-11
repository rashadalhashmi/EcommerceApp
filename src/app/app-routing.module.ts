import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductdetailsComponent } from './components/Product/productdetails/productdetails.component';
import { ProductsofcategoryComponent } from './components/Product/productsofcategory/productsofcategory.component';
import { LoginComponent } from './components/users/login/login.component';

const routes: Routes = [
  { path: '', redirectTo:'/Home' , pathMatch: 'full' },
  { path: 'Home', component: HomeComponent},
  { path: 'Product/:PID', component: ProductdetailsComponent},
  { path: 'Product/Category/:CID', component: ProductsofcategoryComponent},
  { path: 'user',loadChildren:()=>import('../app/components/users/user-auth.module').then(m=>m.UserAuthModule)},
  { path: '**', redirectTo: '/Home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

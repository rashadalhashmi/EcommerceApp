import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductdetailsComponent } from './components/Product/productdetails/productdetails.component';
import { CheckoutComponent } from './components/users/checkout/checkout.component';
import { LoginComponent } from './components/users/login/login.component';
import { UserActionComponent } from './components/users/user-action/user-action.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Product/:PID', component: ProductdetailsComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('../app/components/users/user-auth.module').then(
        (m) => m.UserAuthModule
      ),
  },
  { path: 'userAction', component: UserActionComponent },
  { path: '**', redirectTo: '/Home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

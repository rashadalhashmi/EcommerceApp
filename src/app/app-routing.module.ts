import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/users/login/login.component';

const routes: Routes = [
  { path: '', redirectTo:'/Home' , pathMatch: 'full' },
  { path: 'Home', component: HomeComponent},
  { path: 'User/Login', component: LoginComponent},
  {path:'user',loadChildren:()=>import('../app/components/users/user-auth.module').then(m=>m.UserAuthModule)}

  // {
  //   path: 'User',
  //   loadChildren: () => import('src/app/components/users/user-auth.module').then(m => m.UserAuthModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

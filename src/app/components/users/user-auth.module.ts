import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AngularMaterialModule } from 'src/angular-material/angular-material.module';

const routes:Routes = [
  {path:"", redirectTo:'/User/MyProfile', pathMatch:"full"},
  {path:'User/Login', component:LoginComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AngularMaterialModule

  ],

})
export class UserAuthModule { }

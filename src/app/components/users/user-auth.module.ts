import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AngularMaterialModule } from 'src/angular-material/angular-material.module';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:"", redirectTo:'/User/MyProfile', pathMatch:"full"},
  {path:'User/Login', component:LoginComponent},
  {path:"register" ,component:RegisterComponent},


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
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule


  ],

})
export class UserAuthModule { }

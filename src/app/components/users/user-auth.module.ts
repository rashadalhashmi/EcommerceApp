import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { AngularMaterialModule } from 'src/angular-material/angular-material.module';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';



const route :Routes =[
  {path:"register" ,component:RegisterComponent}
]

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    AngularMaterialModule,
    ReactiveFormsModule,FormsModule
  ]
})
export class UserAuthModule { }

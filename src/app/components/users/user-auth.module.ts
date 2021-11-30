import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { AngularMaterialModule } from 'src/angular-material/angular-material.module';




@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class UserAuthModule { }

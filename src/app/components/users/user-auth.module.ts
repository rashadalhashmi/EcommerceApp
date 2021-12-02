import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AngularMaterialModule } from 'src/angular-material/angular-material.module';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { LoginRegisterViewComponent } from './login-register-view/login-register-view.component'
import { MatDialogModule } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';

const routes:Routes = [
  {path:'registerorlogin', component:LoginRegisterViewComponent},


]


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginRegisterViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [CookieService],

})
export class UserAuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AngularMaterialModule } from 'src/angular-material/angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginRegisterViewComponent } from './login-register-view/login-register-view.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { UserActionComponent } from './user-action/user-action.component';
import { UserAuthGuard } from 'src/app/security/user-auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { OrderComponent } from './order/order.component';
import { ProfileEditingComponent } from './profile-editing/profile-editing.component';
import { CheckOutComponent } from './check-out/check-out.component';

const routes: Routes = [
  { path: '', redirectTo: '/User/MyProfile', pathMatch: 'full' },
  { path: 'registerorlogin', component: LoginRegisterViewComponent },
  {
    path: 'useraction',
    component: UserActionComponent,
    children: [
      { path: 'profile', component: ProfileComponent, canActivate:[UserAuthGuard]},
      { path: 'order', component: OrderComponent ,canActivate:[UserAuthGuard]},
      { path: 'profileEditing', component: ProfileEditingComponent, canActivate:[UserAuthGuard] },
    ],
  },
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginRegisterViewComponent,
    UserActionComponent,
    ProfileComponent,
    OrderComponent,
    ProfileEditingComponent,
    CheckOutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [CookieService],
})
export class UserAuthModule {}

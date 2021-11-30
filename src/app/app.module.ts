import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/users/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

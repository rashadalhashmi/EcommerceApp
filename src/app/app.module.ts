import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CookieService } from 'ngx-cookie-service';
import { AsideComponent } from './components/aside/aside.component';
import { ProductCardComponent } from './components/Product/product-card/product-card.component';
import { ProductdetailsComponent } from './components/Product/productdetails/productdetails.component';
import { ProductsofcategoryComponent } from './components/Product/productsofcategory/productsofcategory.component';

import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './components/slider/slider.component';
import { CartComponent } from './components/cart/cart.component';
import { ClickStopPropagationDirective } from './directive/click-stop-propagation.directive';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserAuthService } from './services/user/user-auth.service';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AsideComponent,
    ProductCardComponent,
    ProductdetailsComponent,
    SliderComponent,
    CartComponent,
    ClickStopPropagationDirective,
    ProductsofcategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

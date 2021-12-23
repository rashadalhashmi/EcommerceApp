import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavService } from './services/navbar/nav.service';
import { ProductService } from './services/product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit ,OnDestroy {
  title = 'EcommerceApp';
  open:boolean=false;

  productsList:any;
  constructor(public NaveService:NavService, private productService:ProductService){}
  ngOnDestroy(): void {
    localStorage.setItem("d","kddkfk");
  }
  ngOnInit(): void {
      addEventListener('unload', (event) => {
        if(localStorage.getItem("rememberMe")==null)
            localStorage.removeItem("Token");
   });
    this.NaveService.open$.subscribe(open=>this.open=open);
  }
}

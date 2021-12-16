import { Component, OnInit } from '@angular/core';
import { NavService } from './services/navbar/nav.service';
import { ProductService } from './services/product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EcommerceApp';
  open:boolean=false;

  productsList:any;
  constructor(public NaveService:NavService, private productService:ProductService){}
  ngOnInit(): void {
    this.NaveService.open$.subscribe(open=>this.open=open);
  }
}

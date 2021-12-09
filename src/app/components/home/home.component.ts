import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';
import { ProductService } from 'src/app/services/product.service';
import { IResultViewModel } from 'src/app/viewmodel/iresult-view-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productsList:any;

  constructor(private productService:ProductService ,) {
    this.productService.getAllProducts().subscribe({
      next: (products) =>
      {
        this.productsList = products.data;
        console.log(this.productsList);
      }
    })
  }

  ngOnInit(): void {
  }

}

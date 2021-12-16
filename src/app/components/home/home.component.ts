import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/navbar/nav.service';
import { ProductService } from 'src/app/services/product/product.service';
import { IResultViewModel } from 'src/app/viewmodel/iresult-view-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productsList: any;
  constructor(private productService: ProductService, private NavService: NavService) {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.productsList = products.data;
      }
    })
  }

  ngOnInit(): void {
    this.NavService.productsSearch.subscribe((searchKey: string) => {
      this.search(searchKey);
    })
  }

  search(searchInp: any) {
    this.productService.search(searchInp).subscribe({
      next: (products) => {
        this.productsList = products.data
      }
    })
  }
}

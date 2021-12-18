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
  // Pagination parameters.
  pageSize:number = 1;
  page:number = 1
  count:number = 0;
  constructor(private productService: ProductService, private NavService: NavService) {
    this.getNumberOfProducts();
    this.getProducts(this.page);
  }

  ngOnInit(): void {
    this.NavService.productsSearch.subscribe((searchKey: string) => {
      this.search(searchKey);
    })
  }

  getProducts(page:number)
  {
    this.productService.getAllProducts(page, this.pageSize).subscribe({
      next: (products) => {
        this.productsList = products.data;
        // this.count = this.productsList.length
        console.log(this.count)
      }
    })
  }

  getNumberOfProducts()
  {
    this.productService.getAllProducts(1, 0).subscribe({
      next: (products) => {
        this.count = products.data.length
      }
    })
  }

  search(searchInp: any) {
    this.productService.search(searchInp).subscribe({
      next: (products) => {
        this.productsList = products.data
      }
    })
  }

  handlePageChange(event:number) {
    this.page = event;
    this.getProducts(this.page);
  }
}

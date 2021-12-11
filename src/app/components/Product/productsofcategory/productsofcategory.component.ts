import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productsofcategory',
  templateUrl: './productsofcategory.component.html',
  styleUrls: ['./productsofcategory.component.scss']
})
export class ProductsofcategoryComponent implements OnInit {
  productsList:any;
  catgSentedId:number = 0;
  constructor(private productService:ProductService, private activeRoute: ActivatedRoute) {
    this.activeRoute.paramMap.subscribe(
      (params) => {
        this.catgSentedId = Number(params.get("CID"));
        this.productService.getProductsByCategoryID(this.catgSentedId).subscribe({
          next: (products) => {
            this.productsList = products.data;
          }
        })
      });
  }

  ngOnInit(): void {
  }

}

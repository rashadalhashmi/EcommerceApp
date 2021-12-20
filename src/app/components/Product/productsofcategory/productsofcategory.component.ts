import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { DepartmentService } from 'src/app/services/department/department.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-productsofcategory',
  templateUrl: './productsofcategory.component.html',
  styleUrls: ['./productsofcategory.component.scss']
})
export class ProductsofcategoryComponent implements OnInit {
  productsList:any;
  category:any;
  catgSentedId:string = "0";
  deptName:string = "";
  constructor(private productService:ProductService,
              private categoryService:CategoryService,
              private deptService:DepartmentService,
              private activeRoute: ActivatedRoute) {
    this.activeRoute.paramMap.subscribe(
      (params) => {
        this.catgSentedId = params.get("CID")!.toString();
        this.productService.getProductsByCategoryID(this.catgSentedId).subscribe({
          next: (products) => {
            this.productsList = products.data;
          }
        });

        this.categoryService.getCategoryByID(this.catgSentedId).subscribe({
          next: (category) => {
            this.category = category.data;
            console.log(this.category.imageURL)
            this.deptService.getDepartmentbyId(category.data.departmentID).subscribe({
              next: (dept) =>
              {
                this.deptName = dept.data.departmentName
              }
            })
          }
        });


      });
  }

  ngOnInit(): void {
  }

}

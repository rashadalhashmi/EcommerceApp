import { NgStyle } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  productSentedId: number = 0;
  // product: any;
  //for test
  product = {
    "name": "A4TECH HeadphoneHS-19",
    "id": 1,
    "price": 11254,
    "quantity": 5,
    "description": "With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.",
    "discount": 15,
    "images": [

         "assets/products/1.webp"
      ,

         "assets/products/2.webp"
      ,

         "assets/products/3.webp"
      ,

         "assets/products/4.webp"
      ,

         "assets/products/5.webp"
      ,

         "assets/products/6.webp"
      ,

         "assets/products/7.webp"
      ,

         "assets/products/8.webp"

    ]
  }
  priceWithoutDiscount: number = 0;
  price: number = 0;

  active: boolean = false;
  @ViewChild("img") img!: ElementRef;
  @ViewChild("actv") imgActive!: ElementRef;

  constructor(private activeRoute: ActivatedRoute, private productService: ProductService) {
    // this.activeRoute.paramMap.subscribe(
    //   (params) => {
    //     this.productSentedId = Number(params.get("PID"));
    //     this.productService.getProductByID(this.productSentedId).subscribe({
    //       next: (product) => {
    //         this.product = product.data;
    //         this.priceWithoutDiscount = this.product.price;
    //         this.price = this.priceWithoutDiscount - (this.priceWithoutDiscount * this.product.discount / 100);
    //         console.log(product)
    //       }
    //     })
    //   }
    // )
  }

  ngOnInit(): void {
  }


  styleProductImage(imgs: any){
    let images = this.imgActive.nativeElement.children;
    for (let i = 0; i < images.length; i++) {
      images[i].children[0].style.border = "1px solid white";
    }
    this.img.nativeElement.src = (imgs.target as HTMLInputElement).src;
    (imgs.target as HTMLInputElement).style.borderColor = "#fcbf14";
    // this.img.nativeElement.style.display = "block";
  }
}

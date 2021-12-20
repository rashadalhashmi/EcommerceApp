import { NgStyle } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  productSentedId: string = "0";
  product: any;
  priceWithoutDiscount: number = 0;
  price: number = 0;

  active: boolean = false;
  @ViewChild("img") img!: ElementRef;
  @ViewChild("actv") imgActive!: ElementRef;

  constructor(private activeRoute: ActivatedRoute, private productService: ProductService) {
    this.activeRoute.paramMap.subscribe(
      (params) => {
        this.productSentedId = params.get("PID")!.toString();
        this.productService.getProductByID(this.productSentedId).subscribe({
          next: (product) => {
            this.product = product.data;
            this.priceWithoutDiscount = this.product.price;
            this.price = this.priceWithoutDiscount - (this.priceWithoutDiscount * this.product.discount / 100);
            console.log(product)
          }
        })
      }
    )
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

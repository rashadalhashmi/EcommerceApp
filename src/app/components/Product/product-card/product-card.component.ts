import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cartService/cart.service';
import { IResultViewModel } from 'src/app/viewmodel/iresult-view-model';
import { Iproduct } from 'src/app/viewmodel/product/iproduct';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  src:string = "assets/headphone.png";
  name:string = "A4TECH HeadphoneHS-19";
  discount:number = 15;
  priceWithoutDiscount = 12552;
  price:number = this.priceWithoutDiscount - (12552 * this.discount/100);

  @Input() product:any;
  constructor(private cartService:CartService) {

  }

  addToCart(){
    this.cartService.addToshppingCart(this.product)

  }
  ngOnInit(): void {
    this.discount = this.product.discount;
    this.priceWithoutDiscount = this.product.price;
    this.price = this.priceWithoutDiscount - (12552 * this.discount/100);
  }

}

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
  src:string = "";
  name:string = "";
  discount:number = 0;
  priceWithoutDiscount = 0;
  price:number = this.priceWithoutDiscount - (this.priceWithoutDiscount * this.discount/100);

  @Input() product:any;
  constructor(private cartService:CartService) {
  }

  addToCart(){
    this.cartService.addToshppingCart(this.product)
  }
  ngOnInit(): void {
    this.discount = this.product.discount;
    this.priceWithoutDiscount = this.product.price;
    this.price = this.product.price - (this.product.price * this.discount/100);
  }
}

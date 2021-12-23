import { Component, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/model/ICartItem';
import { Iproduct } from 'src/app/viewmodel/product/iproduct';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  cartItems:ICartItem = {} as ICartItem;
  products:Iproduct[] = [];
  product:Iproduct = {} as Iproduct;
  totalPrice:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}

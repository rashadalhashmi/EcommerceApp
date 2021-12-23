import { Component, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/model/ICartItem';
import { IOrder } from 'src/app/viewmodel/iorder';
import { Iproduct } from 'src/app/viewmodel/product/iproduct';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {


   order : IOrder;
  totalPrice:number = 0;

  constructor() {

    this.order= {
      status: 0,
      orderDate: new Date(),
      customerID: "dkd5d65ds65",
      items:[
        {
          amount: 10,
          date:new Date() ,
          productID: "sjsjkjsjk"
        },
        {
          amount: 10,
          date:new Date() ,
          productID: "sjsjkjsjk"
        },
        {
          amount: 10,
          date:new Date() ,
          productID: "sjsjkjsjk"
        },
      ]
    }
  }

  ngOnInit(): void {


  }

}

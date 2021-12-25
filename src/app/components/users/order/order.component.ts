import { Component, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/model/ICartItem';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { IOrder } from 'src/app/viewmodel/iorder';
import { Iproduct } from 'src/app/viewmodel/product/iproduct';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders : IOrder[] = [];
  totalPrice:number = 0;

  constructor(private orderService:OrderService) {

    this.orderService.getOrdersByCustomer().subscribe(order => {
      this.orders = order.data
    })
  }

  ngOnInit(): void {
  }

}

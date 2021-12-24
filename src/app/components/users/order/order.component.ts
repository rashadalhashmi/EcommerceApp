import { Component, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/model/ICartItem';
import { OrderService } from 'src/app/services/order/order.service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { IOrder } from 'src/app/viewmodel/iorder';
import { Iproduct } from 'src/app/viewmodel/product/iproduct';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  order : IOrder = {} as IOrder;
  totalPrice:number = 0;

  constructor(private orderService:OrderService,
              private userService:UserAuthService) {

    // this.order = {
    //   status: 0,
    //   orderDate: new Date(),
    //   customerID: "dkd5d65ds65",
    //   items:[
    //     {
    //       amount: 10,
    //       date:new Date() ,
    //       productID: "sjsjkjsjk"
    //     },
    //     {
    //       amount: 10,
    //       date:new Date() ,
    //       productID: "sjsjkjsjk"
    //     },
    //     {
    //       amount: 10,
    //       date:new Date() ,
    //       productID: "sjsjkjsjk"
    //     },
    //   ]
    // }

   // console.log(this.order)

    let userId = this.userService.getUserIdFromToken(localStorage.getItem("Token")!)

    this.orderService.getOrdersByCustomerId(userId).subscribe(order => {
      debugger
      console.log("kkk" + this.order)
      this.order = order.data
      console.log("kkk" + this.order)
      console.log(" kkllll" + order.data)

    })

  }

  ngOnInit(): void {
  }

}

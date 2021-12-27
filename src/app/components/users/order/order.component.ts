import { Component, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/model/ICartItem';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { IOrder } from 'src/app/viewmodel/iorder';
import { Iproduct } from 'src/app/viewmodel/product/iproduct';
import { render } from 'creditcardpayments/creditCardPayments';
import { NotificationService } from 'src/app/services/notification.service';
import { WatchStatusReporter } from 'typescript';
import { OrderStatus } from 'src/app/viewmodel/OrderStatus.enum';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders: IOrder[] = [];
  ordersNew: IOrder[] = [];
  totalPrice: number = 0;
  _isOrderEmpty: boolean = true;
  orderId: string = "";
  // selectedStatus:OrderStatus = 1;

  constructor(private orderService: OrderService,
    private notficationService: NotificationService) {

  }

  ngOnInit(): void {
    this.orderService.getOrdersByCustomer().subscribe({
      next: (order) => {
        this.orders = order.data;
        this.ordersNew = this.orders;
        //for payment
        // [...this.orders].filter(o => o.status === 0).forEach(order => {
        //     this.totalPrice += order.totalPrice
        // })

        console.log(this.totalPrice)

        if (this.orders)
          this._isOrderEmpty = false;
        else
          this._isOrderEmpty = true;
      },
      complete: () => {
        // if (this.totalPrice) {
        //   render({
        //     id: '#myPaypalButtons',
        //     currency: 'USD',
        //     value: this.totalPrice.toString(),
        //     onApprove: (detailes) => {
        //       //alert('transaction successfull');
        //       [...this.orders].filter(o => o.status === 0).forEach(order => {
        //         this.orderService.updateStatusOfOrder(order.id!, 1).subscribe();
        //       });
        //       window.location.reload();
        //       this.notficationService.success("transaction successfull");
        //     },
        //   });
        // }
      }
    });
  }

  getOrdersByStatus(event: any) {
    //this.orderService.getOrdersByStatus(event.target.value).subscribe(response => {
    //     if(response.data)
    //     {
    //       this.orders = response.data;
    //     }
    //     else
    //     {
    //       this.orders = [];
    //       this.notficationService.error("No Orders");
    //     }
    //   });
    // }
    if (event.target.value == 3) {
      this.ordersNew = this.orders;
    }
    else {
      this.ordersNew = [...this.orders].filter(o => o.status == event.target.value)
      if (this.ordersNew == null) {
        this.ordersNew = [];
        this.notficationService.error("No Orders");
      }
    }

  }
}

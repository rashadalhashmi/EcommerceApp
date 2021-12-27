import { Component, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/model/ICartItem';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { IOrder } from 'src/app/viewmodel/iorder';
import { Iproduct } from 'src/app/viewmodel/product/iproduct';
import { render } from 'creditcardpayments/creditCardPayments';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders: IOrder[] = [];
  totalPrice: number = 0;
  _isOrderEmpty: boolean = true;
  orderId: string = "";

  constructor(private orderService: OrderService,
              private notficationService:NotificationService) {


    this.orderService.getOrdersByCustomer().subscribe({
      next: (order) => {
        this.orders = order.data;
        //for payment
        [...this.orders].filter(o => o.status === 0).forEach(order => {
            this.totalPrice += order.totalPrice
        })

        console.log(this.totalPrice)

        if (this.orders)
          this._isOrderEmpty = false;
        else
          this._isOrderEmpty = true;
      },
      complete: () => {
        if (this.totalPrice) {
          render({
            id: '#myPaypalButtons',
            currency: 'USD',
            value: this.totalPrice.toString(),
            onApprove: (detailes) => {
              //alert('transaction successfull');
              [...this.orders].filter(o => o.status === 0).forEach(order => {
                this.orderService.updateStatusOfOrder(order.id!, 1).subscribe();
              });
              window.location.reload();
              this.notficationService.success("transaction successfull");
            },
          });
        }
      }
    });
  }

  ngOnInit(): void {
  }

}

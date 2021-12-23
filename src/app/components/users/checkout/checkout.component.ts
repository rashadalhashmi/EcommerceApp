import { Component, Input, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  @Input() receivedTotalprice: number = 0;
  orderStatus: number = 1;
  constructor(private Status: OrderService) {
    render({
      id: '#myPaypalButtons',
      currency: 'USD',
      value: this.receivedTotalprice.toString(),
      onApprove: (detailes) => {
        alert('transaction successfull');
      },
    });
  }

  ngOnInit(): void {}
}

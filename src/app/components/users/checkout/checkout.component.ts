import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  totalPrice: string = '80';
  constructor() {
    render({
      id: '#myPaypalButtons',
      currency: 'USD',
      value: this.totalPrice,
      onApprove: (detailes) => {
        alert('transaction successfull');
      },
    });
  }

  ngOnInit(): void {}
}

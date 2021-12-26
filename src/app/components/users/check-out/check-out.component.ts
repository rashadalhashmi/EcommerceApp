import { Component, Input, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  @Input() totalPrice: number = 0;
  constructor() {

    render({
      id: '#myPaypalButtons',
      currency: 'USD',
      value: this.totalPrice.toString(),
      onApprove: (detailes) => {
        alert('transaction successfull');
      },
    });


  }

  ngOnInit(): void {
  }

}

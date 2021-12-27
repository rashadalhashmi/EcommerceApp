import { Component, Input, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  @Input() totalPrice: number = 0;
  constructor(private orderService:OrderService) {
    render({
      id: '#myPaypalButtons',
      currency: 'USD',
      value: this.totalPrice.toString(),
      onApprove: (detailes) => {
        alert('transaction successfull');
        this.orderService.updateStatusOfOrder("",1).subscribe()
      },
    });
  }

  ngOnInit(): void {
  }

}

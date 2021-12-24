import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { response } from 'express';
import { map, tap } from 'rxjs';
import { ICart } from 'src/app/model/ICartItem';
import { CartService } from 'src/app/services/cartService/cart.service';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  _isCartEmpty:boolean = true;
  cart:ICart={items:[],totalPrice:0}

  constructor(private cartService:CartService, private router: Router,private notficationService:NotificationService) {
    this.cartService.isCartEmpty().subscribe(response=>{
      this._isCartEmpty = response
    })
  }

  ngOnInit(): void {
    this.cartService.cart.subscribe(cart=>this.cart=cart)
    this.cartService.isCartEmpty()!?this._isCartEmpty:this._isCartEmpty = false;
  }

  removeFromCart(id:string){
          this.cartService.removeItemFromCart(id)
  }

  changeQuantity(id:string,event:any){
    this.cartService.changeQuantity(id,+event.target.value);
  }

  setOrder()
  {
    if(localStorage.getItem('Token'))
    {
      this.cartService.placeOrder();
      this.router.navigate(['/User/useraction/order']);
     }
     else{
            this.notficationService.error("please login firsrt")
     }

  }
}

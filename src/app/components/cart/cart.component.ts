import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { map, tap } from 'rxjs';
import { ICart } from 'src/app/model/ICartItem';
import { UserAuthGuard } from 'src/app/security/user-auth.guard';
import { CartService } from 'src/app/services/cartService/cart.service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { Iproduct } from 'src/app/viewmodel/product/iproduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart:ICart={items:[],totalPrice:0}
  constructor(private cartservice:CartService, private authguard:UserAuthGuard, private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cartservice.cart.subscribe(cart=>this.cart=cart)
  }

  removeFromCart(id:number){
          this.cartservice.removeItemFromCart(id)
  }

  changeQuantity(id:number,event:any){
    debugger
    this.cartservice.changeQuantity(id,+event.target.value);
  }

  setOrder()
  {
    this.cartservice.placeOrder().subscribe();
  }
}

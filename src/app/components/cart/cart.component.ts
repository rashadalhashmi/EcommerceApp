import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { ICart } from 'src/app/model/ICartItem';
import { CartService } from 'src/app/services/cartService/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  _isCartEmpty:boolean = true;
  cart:ICart={items:[],totalPrice:0}
  constructor(private cartService:CartService, private router: Router) {
    this.cartService.isCartEmpty()!?this._isCartEmpty:this._isCartEmpty = false;
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
    this.cartService.placeOrder().subscribe();
    this.router.navigate(['/User/useraction']);
  }
}

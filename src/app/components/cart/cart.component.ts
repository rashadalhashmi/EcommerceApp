import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
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

  cart:ICart={items:[],totalPrice:0}
  constructor(private cartservice:CartService, private router: Router,
    private notficationService:NotificationService) { }

  ngOnInit(): void {
    this.cartservice.cart.subscribe(cart=>this.cart=cart)
  }

  removeFromCart(id:string){
          this.cartservice.removeItemFromCart(id)
  }

  changeQuantity(id:string,event:any){
    this.cartservice.changeQuantity(id,+event.target.value);
  }

  setOrder()
  {
    if(localStorage.getItem('Token'))
    {
      this.cartservice.placeOrder();
      this.router.navigate(['/User/useraction/order']);
     }
     else{
            this.notficationService.error("please login firsrt")
     }

  }
}

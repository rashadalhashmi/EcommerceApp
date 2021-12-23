import { Component, OnInit } from '@angular/core';
import { ICart, ICartItem } from 'src/app/model/ICartItem';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';
import { ProfileService } from 'src/app/services/Profile/profile.service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { Iproduct } from 'src/app/viewmodel/product/iproduct';
import { IuserSingUp } from 'src/app/viewmodel/user/IuserSingUp';

@Component({
  selector: 'app-user-action',
  templateUrl: './user-action.component.html',
  styleUrls: ['./user-action.component.scss'],
})
export class UserActionComponent implements OnInit {

  cartItems:ICartItem = {} as ICartItem;
  products:Iproduct[] = [];
  product:Iproduct = {} as Iproduct;
  totalPrice:number = 0;
  user: IuserSingUp ;

  // {
  //   firstname: 'rashad',
  //   lastname: 'alhashmie',
  //   email: 'rashaami@gamil.com',
  //   username: 'rad2kk021',
  //   password: 'djf125522445',
  //   gender: 0,
  //   address: 'cairo,nasercity',
  //   phone: '01128289672',
  //   image: 'llf/dff',
  //   userRole: 'Customer',
  // };
  constructor(private userAuthservice:UserAuthService){

    this.user={} as IuserSingUp ;
 }

 ngOnInit(): void {

    let token= localStorage.getItem("Token")
    if(token!=null) {
     this.userAuthservice.getUserData(token)
    }
    this.userAuthservice.userData$.subscribe(response=>{
        this.user=response;
    })

}
}

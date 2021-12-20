import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';
import { ProfileService } from 'src/app/services/Profile/profile.service';
import { IuserSingUp } from 'src/app/viewmodel/user/IuserSingUp';

@Component({
  selector: 'app-user-action',
  templateUrl: './user-action.component.html',
  styleUrls: ['./user-action.component.scss'],
})
export class UserActionComponent implements OnInit {
  cartItems:any;
  totalPrice:number = 0;
  user: IuserSingUp = {
    firstname: 'rashad',
    lastname: 'alhashmie',
    email: 'rashaami@gamil.com',
    username: 'rad2kk021',
    password: 'djf125522445',
    gender: 0,
    address: 'cairo,nasercity',
    phone: '01128289672',
    image: 'llf/dff',
    userRole: 'Customer',
  };

  constructor(private profileService:ProfileService,
              private orderService:OrderService,
              private productService:ProductService) {
    this.profileService.getProfile().subscribe({
      next: (profile)=>{
        this.user = profile.data.user
        this.orderService.getOrders(profile.data.user.id).subscribe({
          next: (orders)=>{
            orders.data.forEach((order:any) => {
              this.totalPrice += order.totalPrice;
              console.log(orders.data)
              this.cartItems = order.items
              console.log(this.cartItems)
              order.items.forEach((item:any) => {
                productService.getProductByID(item.productID).subscribe({
                  next:(product) => {
                    this.cartItems = product.data
                    console.log(this.cartItems)
                  }
                })
                console.log(item.productID)
              })
            });
            // console.log(orders.data)
            // console.log(orders)
          }
        })
      }
    })
  }

  ngOnInit(): void {}
}

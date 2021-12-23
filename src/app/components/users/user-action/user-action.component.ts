import { Component, OnInit } from '@angular/core';
import { ICart, ICartItem } from 'src/app/model/ICartItem';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';
import { ProfileService } from 'src/app/services/Profile/profile.service';
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
        console.log(profile);
        this.user = profile.data
        this.orderService.getOrders(profile.data.id).subscribe({
          next: (orders)=>{
            debugger
            let ordersdetect = orders.data.filter((order: any) => order.status == 0)
            ordersdetect.forEach((order:any) => {
              this.totalPrice += order.totalPrice;
              order.items.forEach((item:any) => {
                this.product.name = item.productName
                this.product.price = item.price
                this.products.push(this.product)
            });
          });
        }})
      }})
    }
            // orders.data.forEach((order:any) => {
            //   this.totalPrice += order.totalPrice;
            //   console.log(order.items)
            //   order.items.forEach((item:any) => {
            //     productService.getProductByID(item.productID).subscribe({
            //       next:(product) => {
            //         this.products.push(product.data)
            //         console.log(this.products)
            //       }
            //     })
            //     // console.log(item.productID)
            //   })
            // });
            // console.log(orders.data)
            // console.log(orders)

  ngOnInit(): void {}
}

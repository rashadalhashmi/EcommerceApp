import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { json } from 'express';
import { data } from 'node_modules/browserslist';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICart, ICartItem } from 'src/app/model/ICartItem';
import { IOrder } from 'src/app/viewmodel/iorder';
import { IResultViewModel } from 'src/app/viewmodel/iresult-view-model';
import { Iproduct } from 'src/app/viewmodel/product/iproduct';
import { environment } from 'src/environments/environment';
import { NotificationService } from '../notification.service';
import { ProductService } from '../product/product.service';
import jwt_decode from 'jwt-decode';
import { ProfileService } from '../Profile/profile.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  _cart: ICart = { items: [], totalPrice: 0 };
  cart$: BehaviorSubject<ICart>;
  cartQuantity: number = 0;

  order: IOrder = {} as IOrder;

  public get cart(): Observable<ICart> {
    return this.cart$.asObservable();
  }

  constructor(private notificationService: NotificationService,
    private httpClient: HttpClient,
    private profileService: ProfileService) {
    this.cart$ = new BehaviorSubject<ICart>(this._cart);
    this.getCartFromLocalStroage();
  }

  addToshppingCart(product: Iproduct) {
    let cartItem: ICartItem | undefined = this._cart.items.find(item => item.product.id == product.id);
    if (cartItem) {
      cartItem.Quantity += 1;
    } else {
      let newItem: ICartItem = { Quantity: 1, product: product }
      this._cart.items.push(newItem);

    }
    this._cart.totalPrice = this.calcaulateTotalPrice();

    localStorage.setItem('cart', JSON.stringify(this._cart));
    this.cart$.next(this._cart);
  }

  removeItemFromCart(productId: string) {
    let cartItem: ICartItem | undefined = this._cart?.items.find(item => item.product.id == productId);
    this._cart.items = this._cart.items.filter(item => item != cartItem)
    this._cart.totalPrice = this.calcaulateTotalPrice();
    localStorage.setItem('cart', JSON.stringify(this._cart));
    this.cart$.next(this._cart);
  }

  getCartFromLocalStroage() {
    let cart = localStorage.getItem("cart");
    if (cart) {
      this._cart = JSON.parse(cart);
      this.cart$.next(this._cart);
    }
    else {
      localStorage.setItem('cart', JSON.stringify(this._cart));
    }
  }
  calcaulateTotalPrice(): number {
    const totalPrice = this._cart.items.reduce((total, item) =>
      total + item.Quantity * (item.product.price - (item.product.price * item.product.discount / 100))
      ,
      0);
    return totalPrice;
  }
  changeQuantity(productId: string, quentity: number) {
    let cartItem = this._cart.items.find(item => item.product.id == productId) ?? { Quantity: 0, product: { quantity: 0, id: "0" } };
    if (quentity <= cartItem.product.quantity) {
      cartItem.Quantity = quentity;
      this._cart.totalPrice = this.calcaulateTotalPrice()
      localStorage.setItem('cart', JSON.stringify(this._cart));
      this.cart$.next(this._cart);
    }
    else {

      this.notificationService.error(`Only Avialable ${cartItem.product.quantity} item in Stock`);

    }

  }

  placeOrder() {
    const httpOption = {
      headers: new HttpHeaders({
        'content-type': 'Application/JSON'
      })
    }
    this.order.items = [];
    this._cart.items.forEach(item => {
      this.profileService.getProfile().subscribe({
        next: (profile) => {
          debugger
          this.order.customerID = profile.data.user.id
        }
      })
      this.order.items.push({
        amount: item.Quantity,
        date: new Date(),
        productID: item.product.id.toString(),
      });
    });

    this.order.status = 0;
    this.order.orderDate = new Date();



    console.log(this.order)
    // console.log(jwt_decode(localStorage.getItem("token")!))
    return this.httpClient.post(`${environment.APIURL}/Order`, JSON.stringify(this.order), httpOption);
  }
}

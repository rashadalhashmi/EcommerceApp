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
import { UserAuthService } from '../user/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  _cart: ICart = { items: [], totalPrice: 0 };
  cart$: BehaviorSubject<ICart>;
  cartQuantity: number = 0;

  _isCartEmpty:BehaviorSubject<boolean>;

  order: IOrder = {} as IOrder;

  public get cart(): Observable<ICart> {
    return this.cart$.asObservable();
  }

  constructor(private notificationService: NotificationService,
    private httpClient: HttpClient,
    private userService: UserAuthService) {
    this.cart$ = new BehaviorSubject<ICart>(this._cart);
    this._isCartEmpty = new BehaviorSubject<boolean>(true);
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
    this._isCartEmpty.next(false);
  }

  removeItemFromCart(productId: string) {
    let cartItem: ICartItem | undefined = this._cart?.items.find(item => item.product.id == productId);
    this._cart.items = this._cart.items.filter(item => item != cartItem)
    this._cart.totalPrice = this.calcaulateTotalPrice();
    localStorage.setItem('cart', JSON.stringify(this._cart));
    this.cart$.next(this._cart);
    if(this._cart.items.length == 0)
    {
      this._isCartEmpty.next(true);
    }
    else
    {
      this._isCartEmpty.next(false);
    }
  }

  getCartFromLocalStroage() {
    let cart = localStorage.getItem("cart");
    if (cart) {
      this._cart = JSON.parse(cart);
      this.cart$.next(this._cart);
      this._isCartEmpty.next(false);

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
    let token = localStorage.getItem("Token");
    if (token) {
      this.order.items = [];
      this._cart.items.forEach(item => {
        this.order.items.push({
          amount: item.Quantity,
          date: new Date(),
          productID: item.product.id
        });
      });
      this.order.status = 0;
      this.order.orderDate = new Date();
      this._cart = { items: [], totalPrice: 0 };
      this.cart$.next(this._cart);
      this._isCartEmpty.next(true);
      this.httpClient.post(`${environment.APIURL}/Order`, JSON.stringify(this.order), httpOption).subscribe();
    }
  }
  isCartEmpty(): Observable<boolean> {
      return this._isCartEmpty.asObservable();
  }
}

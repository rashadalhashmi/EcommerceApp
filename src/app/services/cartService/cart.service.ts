import { Injectable, OnInit } from '@angular/core';
import { json } from 'express';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICart, ICartItem } from 'src/app/model/ICartItem';
import { Iproduct } from 'src/app/viewmodel/product/iproduct';
import { NotificationService } from '../notification.service';
import { ProductService } from '../product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService   {
   _cart:ICart = {items:[], totalPrice:0};
   cart$:BehaviorSubject<ICart>;

  public get cart() : Observable<ICart> {
    return this.cart$.asObservable() ;
  }


  constructor( private notificationService: NotificationService) {
      this.cart$=new BehaviorSubject<ICart>(this._cart);
      this.getCartFromLocalStroage();

   }

   addToshppingCart(product: Iproduct) {
    let cartItem:ICartItem |undefined= this._cart.items.find(item=>item.product.id == product.id);
     if (cartItem) {
       cartItem.Quantity +=1;
     }else
     {
       let newItem:ICartItem ={Quantity:1,product:product}
       this._cart.items.push(newItem);

     }
     this._cart.totalPrice = this.calcaulateTotalPrice();

    localStorage.setItem('cart',JSON.stringify(this._cart));
    this.cart$.next(this._cart);

  }

  removeItemFromCart(productId: number) {
    let cartItem:ICartItem|undefined = this._cart?.items.find(item => item.product.id == productId);
    this._cart.items= this._cart.items.filter(item=>item!=cartItem)
    this._cart.totalPrice = this.calcaulateTotalPrice();
    localStorage.setItem('cart',JSON.stringify(this._cart));
    this.cart$.next(this._cart);

  }


 getCartFromLocalStroage(){
  let cart = localStorage.getItem("cart") ;
  if(cart){
     this._cart=JSON.parse(cart);
     this.cart$.next(this._cart);
  }
  else{
    localStorage.setItem('cart',JSON.stringify(this._cart));
  }
 }
 calcaulateTotalPrice():number{
  const totalPrice = this._cart.items.reduce((total,item) =>
  total+ item.Quantity * (item.product.price-(item.product.price*item.product.discount/100))
   ,
   0);
  return totalPrice;
}
changeQuantity(productId:number,quentity:number){
  let cartItem = this._cart.items.find(item => item.product.id == productId)??{Quantity:0,product:{quantity:0,id:0}};
  debugger;
  if (quentity <= cartItem.product.quantity) {
    cartItem.Quantity = quentity;
  this._cart.totalPrice =this.calcaulateTotalPrice()
  localStorage.setItem('cart',JSON.stringify(this._cart));
  this.cart$.next(this._cart);

  }
  else{

      this.notificationService.error(`Only Avialable ${cartItem.product.quantity} item in Stock`);

  }

}

placeOrder(){

}
}

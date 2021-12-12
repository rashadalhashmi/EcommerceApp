import { Iproduct } from "../viewmodel/product/iproduct";

export interface ICartItem {
  product:Iproduct
  Quantity:number
}
export interface ICart{
  totalPrice:number
  items:Array<ICartItem>
}


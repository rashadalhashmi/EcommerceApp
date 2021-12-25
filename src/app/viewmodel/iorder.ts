import { OrderStatus } from "./OrderStatus.enum";

export interface IOrder {
  id?:string
  status: OrderStatus,
  orderDate: Date,
  customerID: string,
  totalPrice:number,
  items: IItem[]
}

export interface IItem {
  id?:string,
  amount: number,
  price?:number,
  date: Date,
  productID: string,
  productName?:string
}

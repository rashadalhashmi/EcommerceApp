export interface IOrder {
  status: 0,
  orderDate: Date,
  customerID: string,
  items: IItem[]
}

export interface IItem {
  // id:string,
  amount: number,
  date: Date,
  productID: string
}

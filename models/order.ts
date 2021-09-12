import { Item } from "react-navigation-header-buttons";
class Order {
  id: string;
  totalAmount: number;
  date: Date;
  items: [];
  constructor(id: string, totalAmount: number, date: Date, items: []) {
    this.id = id;
    this.date = date;
    this.totalAmount = totalAmount;
    this.items = items;
  }
}

export default Order;

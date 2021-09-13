import { Item } from "react-navigation-header-buttons";
class Order {
  id: string;
  totalAmount: number;
  date: string;
  items: [];
  constructor(id: string, totalAmount: number, date: Date, items: []) {
    this.id = id;
    this.date = date.toLocaleDateString("en-En", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    this.totalAmount = totalAmount;
    this.items = items;
  }
}

export default Order;

import Order from "../../models/order";
import { ADD_ORDER } from "../actions/order";

const initialState = {
  orders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        Math.round(Math.random() * 10).toString(),
        action.orderData.amount,
        new Date(),
        action.orderData.items
      );
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
  }
  return state;
};

import CartItem from "../../models/cart-item";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";

const initState = {
  items: {},
  totalAmout: 0,
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedToProduct = action.product;
      let updatedOrNewCartItem;
      if (state.items[addedToProduct.id]) {
        updatedOrNewCartItem = new CartItem(
          state.items[addedToProduct.id].quantity + 1,
          addedToProduct.price,
          addedToProduct.title,
          state.items[addedToProduct.id].sum + addedToProduct.price
        );
      } else {
        updatedOrNewCartItem = new CartItem(
          1,
          addedToProduct.price,
          addedToProduct.title,
          addedToProduct.price
        );
      }
      return {
        ...state,
        items: { ...state.items, [addedToProduct.id]: updatedOrNewCartItem },
        totalAmout: state.totalAmout + addedToProduct.price,
      };
    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.id];
      const currentQty = selectedCartItem.quantity;
      let updateCartItems;
      if (currentQty > 1) {
        // reduce it
        const updateCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.price,
          selectedCartItem.title,
          selectedCartItem.sum - selectedCartItem.price
        );
        updateCartItems = { ...state.items, [action.id]: updateCartItem };
      } else {
        updateCartItems = { ...state.items };
        delete updateCartItems[action.id];
      }
      return {
        ...state,
        items: updateCartItems,
        totalAmout: state.totalAmout - selectedCartItem.price,
      };
  }
  return state;
};

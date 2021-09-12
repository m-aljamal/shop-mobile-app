import PRODUCTS from "../../data";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((p) => p.id === "u1"),
};

export default (state = initialState) => {
  return state;
};

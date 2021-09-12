import React, { useState } from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import product from "./store/reducers/product";
import Navigation from "./navigation/index";
import cart from "./store/reducers/cart";
import orders from "./store/reducers/order";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  products: product,
  cart: cart,
  orders: orders,
});
export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer, composeWithDevTools());
const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

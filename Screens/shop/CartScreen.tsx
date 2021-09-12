import React from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../App";
import { colors } from "../../constant/colors";
import CartItem from "../../components/shop/CartItem";
import { addOrder } from "../../store/actions/order";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cartTotalAmout = useSelector(
    (state: RootState) => state.cart.totalAmout
  );
  const cartItems = useSelector((state: RootState) => {
    const cartItemsArray = [];
    for (const key in state.cart.items) {
      cartItemsArray.push({
        id: key,
        title: state.cart.items[key].title,
        price: state.cart.items[key].price,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return cartItemsArray.sort((a, b): any => (a.id > b.id ? 1 : -1));
  });

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:<Text style={styles.amount}>${cartTotalAmout.toFixed(2)}</Text>
        </Text>
        <Button
          title="Order Now"
          onPress={() => {
            dispatch(addOrder(cartItems, cartTotalAmout));
          }}
          disabled={cartItems.length === 0}
        />
      </View>
      <View>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <CartItem item={item.item} />}
        />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  amount: {
    color: colors.cBlue,
  },
});

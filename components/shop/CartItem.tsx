import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { colors } from "../../constant/colors";
import { removeFormCart } from "../../store/actions/cart";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.qty}>{item.quantity}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.title}>${item.sum.toFixed(2)}</Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(removeFormCart(item.id));
          }}
          style={styles.deleteButton}
        >
          <Ionicons
            name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
            size={23}
            color="red"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  deleteButton: {},
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  qty: {
    fontFamily: "open-sans",
    color: colors.cBlue,
    fontSize: 16,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
});

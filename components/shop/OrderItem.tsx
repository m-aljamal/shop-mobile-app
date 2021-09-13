import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../App";
import { colors } from "../../constant/colors";
import CartItem from "./CartItem";
const OrderItem = ({ item, items }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.total}>$ {item.totalAmount}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Button
        color={colors.darkBlue}
        title="Show Details"
        onPress={() => {
          setShowDetails((prevState) => !prevState);
        }}
      />
      {showDetails && (
        <View style={styles.details}>
          {items.map((cartItem) => (
            <CartItem item={cartItem} key={cartItem.id} />
          ))}
        </View>
      )}
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 20,
    padding: 10,
    alignItems: "center",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  total: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    fontFamily: "open-sans-bold",
  },
  cartItem: {
    width: "100%",
  },
});

// Order {
//     "date": 2021-09-13T03:40:10.752Z,
//     "id": "7",
//     "items": Array [
//       Object {
//         "id": "p1",
//         "price": 29.99,
//         "quantity": 1,
//         "sum": 29.99,
//         "title": "Red Shirt",
//       },
//       Object {
//         "id": "p2",
//         "price": 99.99,
//         "quantity": 1,
//         "sum": 99.99,
//         "title": "Blue Carpet",
//       },
//     ],
//     "totalAmount": 129.98,
//   }

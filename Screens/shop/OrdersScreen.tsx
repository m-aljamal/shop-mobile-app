import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { RootState } from "../../App";
import OrderItem from "../../components/shop/OrderItem";

const OrdersScreen = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);
  console.log("orders", orders);

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <OrderItem item={itemData.item} items={itemData.item.items} />
      )}
    />
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});

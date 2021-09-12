import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { RootState } from "../../App";

const OrdersScreen = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);

  return (
    <View>
      <Text>fff</Text>
    </View>
    // <FlatList
    //   data={orders}
    //   keyExtractor={(item) => item.id}
    //   renderItem={(itemData) => <Text>{itemData.item.totalAmount}</Text>}
    // />
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});

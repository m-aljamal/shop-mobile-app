import React from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { RootState } from "../../App";
import ProductItem from "../../components/shop/ProductItem";

const ProductsOverView = () => {
  const products = useSelector(
    (state: RootState) => state.products.availableProducts
  );

  return (
    <SafeAreaProvider>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <ProductItem item={itemData.item} />}
      />
    </SafeAreaProvider>
  );
};

export default ProductsOverView;

import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../App";
import { colors } from "../../constant/colors";
import { addToCart } from "../../store/actions/cart";

const ProductDetail = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const { productId }: any = route.params;

  const selectProduct = useSelector((state: RootState) =>
    state.products.availableProducts.find((p) => p.id === productId)
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectProduct.imageUrl }} />
      <View style={styles.action}>
        <Button
          color={colors.darkBlue}
          title="Add to cart"
          onPress={() => {
            dispatch(addToCart(selectProduct));
          }}
        />
      </View>
      <Text style={styles.price}>${selectProduct.price.toFixed(2)}</Text>
      <Text style={styles.title}>{selectProduct.title}</Text>
      <Text style={styles.desc}>{selectProduct.description}</Text>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  price: {
    fontSize: 20,
    color: colors.cBlue,
    textAlign: "center",
    marginVertical: 20,
  },
  title: {},
  desc: {
    fontSize: 20,
    textAlign: "center",
    marginHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  action: {
    marginVertical: 10,
    alignItems: "center",
  },
});

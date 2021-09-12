import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import { useDispatch } from "react-redux";
import { colors } from "../../constant/colors";
import { addToCart } from "../../store/actions/cart";
export default function ProductItem({ item }) {
  const dispatch = useDispatch();
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  const handleViewDetails = () => {
    navigation.navigate("ProductDetail", {
      productId: item.id,
      title: item.title,
    });
  };
  const navigation = useNavigation();
  return (
    <View style={styles.product}>
      <View style={styles.touch}>
        <TouchableCmp onPress={handleViewDetails} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
              <Button
                color={colors.darkBlue}
                title="View Details"
                onPress={handleViewDetails}
              />
              <Button
                color={colors.darkBlue}
                title="To Cart"
                onPress={() => {
                  dispatch(addToCart(item));
                }}
              />
            </View>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  touch: {
    overflow: "hidden",
    borderRadius: 10,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 18,

    fontFamily: "open-sans-bold",
  },
  price: {
    fontSize: 14,
    color: colors.gray,
    fontFamily: "open-sans-bold",
    marginTop: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",

    paddingHorizontal: 20,
  },

  details: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
});

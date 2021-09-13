import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import ProductsOverView from "../Screens/shop/ProductsOverView";
import ProductDetail from "../Screens/shop/ProductDetail";
import HeaderBUtton from "../components/ui/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CartScreen from "../Screens/shop/CartScreen";
import { colors } from "../constant/colors";

const Stack = createNativeStackNavigator();
const backgroundColor = Platform.OS === "android" ? colors.darkBlue : "#fff";

const headerTintColor = Platform.OS === "android" ? "#fff" : colors.darkBlue;

export default function RootNavigation(props) {
  const headerLeft = () => (
    <HeaderButtons HeaderButtonComponent={HeaderBUtton}>
      <Item
        onPress={() => {
          props.navigation.toggleDrawer();
        }}
        title="Menu"
        iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
      />
    </HeaderButtons>
  );
  const headerRight = () => (
    <HeaderButtons HeaderButtonComponent={HeaderBUtton}>
      <Item
        onPress={() => {
          props.navigation.navigate("CartScreen");
        }}
        title="Cart"
        iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
      />
    </HeaderButtons>
  );
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductsOverView"
        component={ProductsOverView}
        options={{
          title: "All Products",
          headerStyle: {
            backgroundColor,
          },
          headerLeft: headerLeft,
          headerRight: headerRight,
          headerTintColor,
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "open-sans-bold",
          },
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ route }: any) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor,
          },
          headerRight: headerRight,
          headerTintColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          title: "Cart",
          headerStyle: {
            backgroundColor,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "open-sans-bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}

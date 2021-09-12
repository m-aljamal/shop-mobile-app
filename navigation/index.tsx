import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProductsOverView from "../Screens/shop/ProductsOverView";
import { colors } from "../constant/colors";
import ProductDetail from "../Screens/shop/ProductDetail";
import HeaderBUtton from "../components/ui/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CartScreen from "../Screens/shop/CartScreen";
import OrdersScreen from "../Screens/shop/OrdersScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
export default function Navigation() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <MyDrawer />
        {/* <RootNavigation /> */}
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const backgroundColor = Platform.OS === "android" ? colors.darkBlue : "#fff";

const headerTintColor = Platform.OS === "android" ? "#fff" : colors.darkBlue;
function RootNavigation(props) {
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

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="ProductsOverView"
        component={RootNavigation}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          headerStyle: {
            backgroundColor,
          },

          headerTintColor,
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "open-sans-bold",
          },
        }}
      />
    </Drawer.Navigator>
  );
}

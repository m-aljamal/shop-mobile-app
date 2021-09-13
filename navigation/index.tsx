import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "../constant/colors";
import OrdersScreen from "../Screens/shop/OrdersScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import { Ionicons } from "@expo/vector-icons";

export default function Navigation() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <MyDrawer />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();

const backgroundColor = Platform.OS === "android" ? colors.darkBlue : "#fff";

const headerTintColor = Platform.OS === "android" ? "#fff" : colors.darkBlue;

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="All Products"
        component={StackNavigator}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="md-cart"
              size={23}
              color={focused ? colors.cBlue : "#ccc"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          headerStyle: {
            backgroundColor,
          },
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="md-list"
              size={23}
              color={focused ? colors.cBlue : "#ccc"}
            />
          ),

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

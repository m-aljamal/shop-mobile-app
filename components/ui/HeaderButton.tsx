import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { colors } from "../../constant/colors";

const Header = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : colors.cBlue}
    />
  );
};

export default Header;

import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
  tabIcon
}) {
  const renderIconType = () => {
    switch (tabIcon) {
      case true:
        return (
          <View style={styles.tabContainer}>
            <View
              style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <MaterialCommunityIcons
                name={name}
                color={iconColor}
                size={size * 0.7}
              />
            </View>
          </View>
        );
      default:
        return (
          <View
            style={{
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <MaterialCommunityIcons
              name={name}
              color={iconColor}
              size={size * 0.5}
            />
          </View>
        );
    }
  };
  return renderIconType();
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50
  }
});
export default Icon;

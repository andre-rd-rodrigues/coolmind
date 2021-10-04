import Animated, {
  useSharedValue,
  useAnimatedStyle,
  Extrapolate,
  interpolate,
  withSpring
} from "react-native-reanimated";
import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const LikeButton = ({ onPress, value }) => {
  const liked = useSharedValue(value);

  //Default
  const iconSize = 23;
  const iconColor = colors.red;

  //Animation
  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP)
        }
      ]
    };
  });

  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: liked.value
        }
      ]
    };
  });

  return (
    <Pressable
      onPress={() => {
        liked.value = withSpring(liked.value ? 0 : 1);
        onPress(!liked.value);
      }}
    >
      <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
        <MaterialCommunityIcons
          name={"heart-outline"}
          size={iconSize}
          color={iconColor}
        />
      </Animated.View>
      <Animated.View style={fillStyle}>
        <MaterialCommunityIcons
          name={"heart"}
          size={iconSize}
          color={iconColor}
        />
      </Animated.View>
    </Pressable>
  );
};

export default LikeButton;

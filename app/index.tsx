import "../global.css";
import React, { useEffect, useRef } from "react";
import { View, Text, Animated, Easing, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "../store/store";

export default function App() {
  const backgroundColor = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateBackground = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(backgroundColor, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false,
          }),
          Animated.timing(backgroundColor, {
            toValue: 2,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false,
          }),
          Animated.timing(backgroundColor, {
            toValue: 3,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false,
          }),
        ]),
      ).start();
    };

    animateBackground();
  }, [backgroundColor]);

  // Interpolating RGB Colors
  const bgColor = backgroundColor.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: [
      "rgb(255, 0, 0)",
      "rgb(0, 255, 0)",
      "rgb(0, 0, 255)",
      "rgb(255, 0, 0)",
    ],
  });

  return (
    // Redux Provider
    <Provider store={store}>
      <View className="flex-1">
        {/* Full-Screen Animated Background */}
        <Animated.View
          style={[styles.fullScreen, { backgroundColor: bgColor }]}
        />

        {/* Centered Content */}
        <View className="flex-1 items-center justify-center">
          <Text className="text-white text-9xl font-bold">
            Wallet for YOU! Wallet for ME!
          </Text>
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
});

import React from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Container = ({ children, scrollView = false, ...otherProps }) => {
  const ContainerScroll = () => (
    <KeyboardAwareScrollView style={styles.container}>
      {children}
    </KeyboardAwareScrollView>
  );
  return scrollView ? (
    <ContainerScroll />
  ) : (
    <View style={styles.container}>{children}</View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  }
});

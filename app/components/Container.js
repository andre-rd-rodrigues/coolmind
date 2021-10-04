import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Container = ({ children, scrollView = false, ...otherProps }) => {
  const ContainerScroll = () => (
    <ScrollView {...otherProps}>
      <View style={styles.container}>{children}</View>
    </ScrollView>
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

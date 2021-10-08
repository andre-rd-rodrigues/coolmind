import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import LottieView from "lottie-react-native";

const UploadScreen = ({ visible = false, onDone }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <LottieView
          style={{
            width: 120,
            height: 120
          }}
          onAnimationFinish={onDone}
          loop={false}
          autoPlay
          source={require("../assets/animations/done.json")}
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default UploadScreen;

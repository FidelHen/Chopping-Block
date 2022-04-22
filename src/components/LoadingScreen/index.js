import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "@ant-design/react-native";

const LoadingScreen = ({ title }) => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#4053FA" />
      <Text style={{ marginTop: 8 }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingScreen;

import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "@ant-design/react-native";
import { WebView } from "react-native-webview";
import { AntDesign } from "@expo/vector-icons";

const ViewRestaurant = ({ navigation, route }) => {
  const { restaurantUrl } = route.params;
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={{ flex: 0.1, marginLeft: "5%", justifyContent: "center" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={28} color="#000000" />
        </TouchableOpacity>
      </View>
      {isLoading && <ActivityIndicator size="large" color="#4053FA" />}
      <WebView
        source={{ uri: restaurantUrl }}
        onLoadStart={() => setIsLoading(true)}
        onLoad={() => {
          setIsLoading(false);
        }}
      />
    </SafeAreaView>
  );
};

export default ViewRestaurant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { auth } from "../../../firebase/firebase";
import fakeRestaurantData from "../../../utils/fakeRestuarantData";
import { Card } from "@ant-design/react-native";
import RestaurantSimplified from "../../../components/RestaurantCardSimplified";
import CardDivider from "../../../components/RestaurantCardSimplified/CardDivider";
import { db } from "../../../firebase/firebase";
import { getDoc, doc } from "firebase/firestore";

const Favorites = ({ navigation }) => {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    grabFavoritesData();
  }, []);

  async function grabFavoritesData() {
    const docRef = doc(db, "users", auth.currentUser?.uid);
    const docSnap = await getDoc(docRef);
    const rd = docSnap?.data()["favorites"]
      ? docSnap.data()["favorites"]
      : fakeRestaurantData;
    setRestaurantData(rd);
  }

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaProvider>
        <StatusBar />
        <View
          style={{ flex: 0.15, marginLeft: "5%", justifyContent: "center" }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <AntDesign name="left" size={28} color="#000000" />
          </TouchableOpacity>
        </View>

        <View style={styles.title}>
          <Text style={{ fontSize: 32, letterSpacing: 0, opacity: 1 }}>
            Favorites
          </Text>
        </View>

        <View style={styles.container}>
          <Card style={styles.card}>
            <Card.Body style={styles.cardBody}>
              {restaurantData.map((restaurant, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ViewRestaurant", {
                        restaurantUrl: restaurant.url,
                      });
                    }}
                  >
                    <View key={restaurant.name}>
                      <RestaurantSimplified
                        key={index}
                        restaurant={restaurant}
                      />
                      {index !== restaurantData.length - 1 && <CardDivider />}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </Card.Body>
          </Card>
        </View>
      </SafeAreaProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
  },
  title: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  image_container: {
    flex: 0.4,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image_text: {
    flex: 0.8,
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginLeft: "5%",
    alignItems: "flex-start",
  },
  buttons: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default Favorites;

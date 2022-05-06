import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import { Card } from "@ant-design/react-native";
import RestaurantSimplified from "../RestaurantCardSimplified";
import CardDivider from "../RestaurantCardSimplified/CardDivider";
import { ActivityIndicator } from "@ant-design/react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width - 20;

const RestaurantBottomSheet = ({ restaurants, navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (restaurants.length === 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [restaurants]);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Header
          style={styles.cardHeader}
          title={<Text style={styles.cardTitle}>🌯 Top 3 picks</Text>}
        />
        {isLoading ? (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator size="small" color="#4053FA" />
          </View>
        ) : (
          <Card.Body style={styles.cardBody}>
            {restaurants.map((restaurant, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ViewRestaurant", {
                      restaurantUrl: restaurant.url,
                    });
                  }}
                >
                  <View key={restaurant.name}>
                    <RestaurantSimplified key={index} restaurant={restaurant} />
                    {index !== restaurants.length - 1 && <CardDivider />}
                  </View>
                </TouchableOpacity>
              );
            })}
          </Card.Body>
        )}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    alignItems: "center",
    marginBottom: 30,
  },
  card: {
    width: CARD_WIDTH,
    borderWidth: 0,
    borderRadius: 8,
    display: "flex",
  },
  cardHeader: {
    marginTop: 15,
    borderWidth: 0,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  activityIndicatorContainer: {
    height: 100,
    justifyContent: "center",
  },
  cardBody: {
    borderColor: "transparent",
  },
});

export default RestaurantBottomSheet;

import React from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import { Card } from '@ant-design/react-native';
import RestaurantSimplified from '../RestaurantCardSimplified';
import CardDivider from '../RestaurantCardSimplified/CardDivider';

const { width } = Dimensions.get("window");
const CARD_WIDTH = width - 20;

const RestaurantBottomSheet = ({ restaurants }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Header
          style={styles.cardHeader}
          title={<Text style={styles.cardTitle}>🌯 Top 3 picks</Text>}
        />
        <Card.Body style={styles.cardBody}>
          {restaurants.map((restaurant, index) => {
            return (
              <View key={restaurant.name}>
                <RestaurantSimplified
                  key={index}
                  restaurant={restaurant}
                />
                {index !== restaurants.length - 1 && <CardDivider />}
              </View>
            );
          })}
        </Card.Body>
      </Card>
    </View>
  );
}

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
  },
  cardHeader: {
    marginTop: 15,
    borderWidth: 0,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardBody: {
    borderColor: 'transparent'
  },
});

export default RestaurantBottomSheet;
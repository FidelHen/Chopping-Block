import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import StarReview from "react-native-star-review";

const RestaurantCardSimplified = ({ restaurant }) => {
  return (
    <View style={styles.restaurant}>
      <Image
        source={{ uri: restaurant.image }}
        resizeMode='cover'
        style={styles.cardImage}
      />
      <View style={styles.restaurantDetails}>
        <Text style={styles.name}>{restaurant.id}. {restaurant.name}</Text>
        <StarReview ratings={restaurant.rating} stars={5} reviewTextStyle={styles.textDimmed} reviews={restaurant.reviews} reviewsText={`• ${restaurant.cuisine}`} />
        <Text style={styles.textDimmed}>{restaurant.address}</Text>
        <Text style={styles.textDimmed}>{restaurant.services}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  restaurant: {
    marginRight: 15,
    marginLeft: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantDetails: {
    marginLeft: 12,
    flex: 1,
    alignItems: 'flex-start',
    width: '100%',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  textDimmed: {
    fontSize: 12,
    color: '#8E8E93',
  }
});

export default RestaurantCardSimplified;
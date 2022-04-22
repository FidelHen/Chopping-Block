import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { auth } from '../../../firebase/firebase';
import fakeRestaurantData from '../../../utils/fakeRestuarantData';
import { Card } from '@ant-design/react-native';

const Favorites = ({ navigation }) => {
    function viewRestaurant(restaurant) {
        alert(restaurant.name);
    }

    return (
        <SafeAreaView style={styles.container}>
        <SafeAreaProvider>
            <StatusBar />
            <View style={{ flex: 0.15, marginLeft: '5%', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                    <AntDesign name='left' size={28} color="#000000" />
                </TouchableOpacity>
            </View>

            <View style={styles.title}>
                <Text style={{ fontSize: 32, letterSpacing: 0, opacity: 1 }}>
                    Favorites
                </Text>
            </View>

            <View style={styles.image_text}>
            {fakeRestaurantData.map((restaurant, index) => {
                return (
                    <TouchableOpacity onPress={() => viewRestaurant(restaurant)}>
                        <Card>
                            <Card.Header
                                title={restaurant.name}
                                thumbStyle={{ width: 30, height: 30 }}
                                thumb={restaurant.image}
                            />
                        </Card>
                    </TouchableOpacity>
                );
            })}
            </View>
        </SafeAreaProvider>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "#fff"
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
  }
});

export default Favorites
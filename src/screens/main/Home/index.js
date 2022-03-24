import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={{flexDirection: "row", justifyContent: "center"}}>
        <Text>
          Main Screen
        </Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff"
  },
});

export default Home;

import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ChevronRight } from "react-native-feather";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width - 20;

const PrimaryMapButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Text style={styles.header}>🎉 Eating with a group?</Text>
          <Text style={styles.description}>Make your own Block Party or join an existing Block Party with a code!</Text>
        </View>
        <View style={styles.chevronContainer}>
          <ChevronRight size={24} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    borderWidth: 0,
    alignItems: "center",
    marginBottom: 8,
  },
  card: {
    width: CARD_WIDTH,
    borderWidth: 0,
    backgroundColor: "#4053FA",
    borderRadius: 8,
    padding: 15,
    display: "flex",
    flexDirection: "row",
  },
  header: {
    fontSize: 18,
    color: 'white',
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: 'white',
    marginRight: 14
  },
  chevronContainer: {
    display: "flex",
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  }
});

export default PrimaryMapButton;
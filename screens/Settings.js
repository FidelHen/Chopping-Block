import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProfilePic from '../svgs/profilePic';

const entireScreenWidth = Dimensions.get('window').width;
const entireScreenHeight = Dimensions.get('window').height;

const Landing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaProvider>
        <StatusBar />
        <View style={styles.title}>
          <Text style={{ fontSize: 40, letterSpacing: 0, opacity: 1 }}>
            Settings
          </Text>
        </View>

        <View style={styles.image_container}>
          <View style={{flex: 0.4}}>
            <ProfilePic />
          </View>
          <View style={{flex: 0.2}}>
            <Text style={{ fontSize: 25, letterSpacing: 0, opacity: 1 }}>
              Peter Glover
            </Text>
          </View>
          <View>
            <Text>
              peter456@gmail.com
            </Text>
          </View>
        </View>

        <View style={styles.image_text}>
          <Text style={{
            fontSize: 27, fontWeight: "bold", letterSpacing: 0, opacity: 1
          }}>
            Account Setting
          </Text>

          <Text style={{
            fontSize: 20, textAlign: "center", letterSpacing: 0, opacity: 1
          }}>
            Edit Name:
          </Text>

          <Text style={{
            fontSize: 20, textAlign: "center", letterSpacing: 0, opacity: 1
          }}>
            Recent Groups:
          </Text>

          <Text style={{
            fontSize: 20, textAlign: "center", letterSpacing: 0, opacity: 1
          }}>
            Favorites:
          </Text>

          <Text style={{
            fontSize: 20, textAlign: "center", letterSpacing: 0, opacity: 1
          }}>
            Reset Password:
          </Text>
        </View>
      </SafeAreaProvider>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "#fff"
  },
  title: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "2%",
    alignContent: "center"
  },
  image_container: {
    flex: 0.4,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%"
  },
  image_text: {
    flex: 0.8,
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginLeft: "5%",
    alignItems: "flex-start",
  },
  small_circles: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "44%",
    marginRight: "44%",
  },
  buttons: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  }
});

export default Landing

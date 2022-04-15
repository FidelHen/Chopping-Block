import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TacoSVG from '../../../assets/svgs/tacoSVG';
import { Button } from '@ant-design/react-native';

const Landing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaProvider>
        <StatusBar />
        <View style={styles.title}>
          <Text style={{ fontSize: Platform.OS == "ios" ? 49 : 42, letterSpacing: 0, opacity: 1 }}>
            Chopping
          </Text>
          <Text style={{ fontSize: Platform.OS == "ios" ? 49 : 42, letterSpacing: 0, opacity: 1 }}>
            Block
          </Text>
        </View>
        <View style={styles.image_container}>
          <TacoSVG />
        </View>
        <View style={styles.image_text}>
          <Text style={{ fontSize: Platform.OS == "ios" ? 27 : 24, fontWeight: "bold", letterSpacing: 0, opacity: 1 }}>
            You're on the Chopping Block!
          </Text>
          <Text style={{ fontSize: Platform.OS == "ios" ? 20 : 18, paddingLeft: "12.5%", paddingRight: "12.5%", textAlign: "center", letterSpacing: 0, opacity: 1 }}>
            Don't know where to eat? We're here to help.
          </Text>
        </View>
        <View style={styles.buttons}>
          <Button type="primary" style={{ flex: 0.35, backgroundColor: "#4053FA" }} onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Sign up
            </Text>
          </Button>
          <Button style={{ flex: 0.35, borderWidth: 2, borderColor: "#4053FA" }} onPress={() => navigation.navigate('Login')}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "#4053FA" }}>
              Log in
            </Text>
          </Button>
        </View>
      </SafeAreaProvider>
    </SafeAreaView>
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
    flex: 0.2,
    flexDirection: "column",
    justifyContent: "center",
    left: "10%",
    marginTop: "10%",
  },
  image_container: {
    flex: 0.3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
  },
  image_text: {
    flex: 0.2,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttons: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  }
});

export default Landing

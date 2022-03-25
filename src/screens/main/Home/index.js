import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button } from '@ant-design/react-native';
import { auth } from '../../../firebase/firebase'; 

const Home = ( {navigation} ) => {

  function signOutUser() {
    auth.signOut().then(() => {
      navigation.navigate("Landing")
    })
    .catch(error => {
      alert(error.message)
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={{ flexDirection: "column", alignItems: 'center', justifyContent: "center" }}>
        <Text>
          Main Screen Signed in with {auth.currentUser?.email}
        </Text>
        <Button type="primary" style={{ height: 40, margin: 12, borderWidth: 1, padding: 10, backgroundColor: "#4053FA" }} onPress={() => signOutUser()}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Sign Out
          </Text>
        </Button>
        <Button type="primary" style={{ height: 40, margin: 12, borderWidth: 1, padding: 10, backgroundColor: "#4053FA" }} onPress={() => navigation.navigate("Settings")}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Settings
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff"
  },
});

export default Home;
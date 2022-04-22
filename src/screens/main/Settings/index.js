import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProfilePic from '../../../assets/svgs/profilePicSVG';
import { auth } from '../../../firebase/firebase';
import { db } from '../../../firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';

const Settings = ({ navigation }) => {

  const [userName, setUserName] = useState("Test");
  const [userEmail, setUserEmail] = useState("Test");


  useEffect(() => {
    (async () => {
      const docRef = doc(db, "users", auth.currentUser?.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUserName(docSnap.data()["full_name"])
        setUserEmail(docSnap.data()["email"])
      }
      else {
        console.log("No data")
      }
    })();
  }, [])

  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.navigate("Landing")
    })
      .catch(error => {
        alert(error.message)
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaProvider>
        <StatusBar />

        <View style={{ flex: 0.15, marginLeft: '5%', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <AntDesign name='left' size={28} color="#000000" />
          </TouchableOpacity>
        </View>

        <View style={styles.title}>
          <Text style={{ fontSize: 32, letterSpacing: 0, opacity: 1 }}>
            Settings
          </Text>
        </View>

        <View style={styles.image_container}>
          <View style={{ flex: 0.7 }}>
            <ProfilePic />
          </View>
          <View style={{ flex: 0.2 }}>
            <Text style={{ fontSize: 25, letterSpacing: 0, opacity: 1 }}>
              Name: {userName}
            </Text>
          </View>
          <View style={{ flex: 0.4 }}>
            <Text>
              Email: {userEmail}
            </Text>
          </View>
        </View>

        <View style={styles.image_text}>
          <TouchableOpacity>
            <Text style={{ fontSize: 27, fontWeight: "bold", letterSpacing: 0, opacity: 1 }}>
              Account Setting
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("EditName")}>
            <Text style={{ fontSize: 20, textAlign: "center", letterSpacing: 0, opacity: 1 }}>
              Edit Name
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("RecentGroups")}>
            <Text style={{ fontSize: 20, textAlign: "center", letterSpacing: 0, opacity: 1 }}>
              Recent Groups
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Favorites")}>
            <Text style={{ fontSize: 20, textAlign: "center", letterSpacing: 0, opacity: 1 }}>
              Favorites
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ResetPassword")}>
            <Text style={{ fontSize: 20, textAlign: "center", letterSpacing: 0, opacity: 1 }}>
              Reset Password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSignOut()}>
            <Text style={{ fontSize: 20, textAlign: "center", letterSpacing: 0, opacity: 1 }}>
              Log Out
            </Text>
          </TouchableOpacity>
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

export default Settings

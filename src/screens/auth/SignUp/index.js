import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Button } from '@ant-design/react-native';
import { auth } from '../../../firebase/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { db } from '../../../firebase/firebase';
import { setDoc, doc } from "firebase/firestore";

const SignUp = ({ navigation }) => {

  const [fullName, onChangeFullName] = useState();
  const [email, onChangeEmail] = useState();
  const [password, onChangePassword] = useState();

  function signUpUser(fullName, email, password) {
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      updateProfile(auth.currentUser, {
        displayName: fullName
      }).then(async () => {
        alert("Sign Up Successful")
        try {
          const docRef = doc(db, "users", auth.currentUser?.uid) 
          await setDoc( docRef, {
            full_name: fullName,
            email: email
          });
          console.log("Document written with ID: ", auth.currentUser?.uid);
          alert("User Added To Database")
          navigation.navigate('Cravings');
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }).catch(error => {
        alert("Setting displayName error");
        alert(error.messages);
      });
    }).catch(error => {
      alert("Sign Up Error");
      alert(error.messages);
    })
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <SafeAreaProvider>
        <StatusBar />
        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
          <View style={{ flex: 0.15, marginLeft: '5%' }}>
            <TouchableOpacity style={{ width: '10%' }} onPress={() => navigation.navigate("Landing")}>
              <AntDesign name='left' size={28} color="#000000" />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.5, flexDirection: 'row', alignContent: 'center', justifyContent: 'flex-start', marginLeft: '7%' }}>
            <Text style={{ fontSize: Platform.OS == "ios" ? 39 : 34, fontWeight: 'bold' }}>
              Create Account
            </Text>
          </View>
          <View>
            <TextInput style={styles.input} onChangeText={onChangeFullName} value={fullName} placeholder="Full Name" />
            <TextInput style={styles.input} onChangeText={onChangeEmail} value={email} placeholder="Email" />
            <TextInput style={styles.input} onChangeText={onChangePassword} value={password} placeholder="Password" secureTextEntry={true} />
            <Button type="primary" style={{ height: 40, margin: 12, borderWidth: 1, padding: 10, backgroundColor: "#4053FA" }} onPress={() => signUpUser(fullName, email, password)}>
              <Text style={{ fontSize: Platform.OS == "ios" ? 18 : 14, fontWeight: "700" }}>
                Sign Up
              </Text>
            </Button>
          </View>
        </View>
      </SafeAreaProvider>
    </KeyboardAvoidingView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "#fff"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});

export default SignUp

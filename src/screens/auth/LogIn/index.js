import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Button } from '@ant-design/react-native';
import { auth } from '../../../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ navigation }) => {

  const [email, onChangeEmail] = useState();
  const [password, onChangePassword] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Home")
      }
    })

    return unsubscribe
  }, [])

  function signInUser(email, password) {
    signInWithEmailAndPassword(auth, email, password).then(userCredentials => {
      console.log(userCredentials.user);
    }).catch(error => {
      alert(error.messages);
    })
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <SafeAreaProvider>
        <StatusBar />
        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
          <View style={{ flex: 0.15, marginLeft: '5%', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate("Landing")}>
              <AntDesign name='left' size={28} color="#000000" />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.4, flexDirection: 'row', alignContent: 'center', justifyContent: 'flex-start', marginLeft: '7%' }}>
            <Text style={{ fontSize: 39, fontWeight: 'bold' }}>
              Welcome back!
            </Text>
          </View>
          <TextInput style={styles.input} onChangeText={onChangeEmail} value={email} placeholder="Email" />
          <TextInput style={styles.input} onChangeText={onChangePassword} value={password} placeholder="Password" secureTextEntry={true} />
          <View style={{ flex: 0.1, justifyContent: 'center'}}>
            <TouchableOpacity style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate("ResetPassword")}>
              <Text style={{ fontSize: 16, color: 'blue' }}>
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.2, alignContent: 'center' }}>
            <Button type="primary" style={{ height: 40, margin: 12, borderWidth: 1, padding: 10, backgroundColor: "#4053FA" }} onPress={() => signInUser(email, password)}>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                Sign In
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

export default Login

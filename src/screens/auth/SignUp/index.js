import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '@ant-design/react-native';
import { auth } from '../../../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = ({ navigation }) => {

  const [fullName, onChangeFullName] = useState();
  const [email, onChangeEmail] = useState();
  const [password, onChangePassword] = useState();

  function signUpUser(fullName, email, password) {
    createUserWithEmailAndPassword(auth, email, password).then(userCredentials => {
      console.log(userCredentials);
      alert("Sign Up Successful");
      navigation.navigate('Cravings');
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
          <View style={{ flex: 0.3, flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24 }}>
              Sign Up Screen
            </Text>
          </View>
          <TextInput style={styles.input} onChangeText={onChangeFullName} value={fullName} placeholder="Full Name" />
          <TextInput style={styles.input} onChangeText={onChangeEmail} value={email} placeholder="Email" />
          <TextInput style={styles.input} onChangeText={onChangePassword} value={password} placeholder="Password" secureTextEntry={true} />
          <Button type="primary" style={{ height: 40, margin: 12, borderWidth: 1, padding: 10, backgroundColor: "#4053FA" }} onPress={() => signUpUser(fullName, email, password)}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Sign Up
            </Text>
          </Button>
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

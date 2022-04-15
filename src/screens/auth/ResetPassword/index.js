import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from '@ant-design/react-native';
import { auth } from '../../../firebase/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const ResetPassword = ({ navigation }) => {

  const [email, setEmail] = useState();

  function sendResetEmail(e) {
    sendPasswordResetEmail(auth, e).then(function() {
      alert("Password reset email was sent")
      navigation.navigate("Landing")
    })
    .catch(function(error) {
      alert("Error! Password reset email was not sent")
    });
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <SafeAreaProvider>
        <StatusBar />
        <View style={{ flex: 0.8, alignContent: 'center', justifyContent: 'flex-end' }}>
          <View style={{ flex: 0.2, flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24 }}>
              Reset Password
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{fontSize: 20}}>
              Please enter email for password reset
            </Text>
          </View>
          <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email" />
        </View>
        <View style={{ flex: 0.6, alignContent: 'center' }}>
          <Button type="primary" style={{ height: 40, margin: 12, borderWidth: 1, padding: 10, backgroundColor: "#4053FA" }} onPress={() => sendResetEmail(email)}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Send Email
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
    justifyContent: "space-around",
    backgroundColor: "#fff"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});


export default ResetPassword

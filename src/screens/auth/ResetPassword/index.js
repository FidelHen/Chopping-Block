import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, KeyboardAvoidingView, Platform,
  TouchableWithoutFeedback, Keyboard, TextInput
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from '@ant-design/react-native';

const Reset_Password = () => {

  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  function talkToFirebase(p, cp) {
    if (p == cp) {
      console.log(p);
    }
    else {
      alert("Passwords do not match!")
    }
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
          <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="New Password" secureTextEntry={true} />
          <TextInput style={styles.input} onChangeText={setConfirmPassword} value={confirmPassword} placeholder="Confirm Password" secureTextEntry={true} />
        </View>
        <View style={{ flex: 0.6, alignContent: 'center' }}>
          <Button type="primary" style={{ height: 40, margin: 12, borderWidth: 1, padding: 10, backgroundColor: "#4053FA" }} onPress={() => talkToFirebase(password, confirmPassword)}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Reset
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


export default Reset_Password

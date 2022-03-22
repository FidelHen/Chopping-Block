import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from '@ant-design/react-native';

const SignUp = () => {

  const [fullName, onChangeFullName] = React.useState();
  const [email, onChangeEmail] = React.useState();
  const [password, onChangePassword] = React.useState();

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaProvider>
        <StatusBar />
        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
          <View style={{flex: 0.1, flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 24}}>
              SignUp Screen
            </Text>
          </View>
          <TextInput style={styles.input} onChangeText={onChangeFullName} value={fullName} placeholder="Full Name"/>
          <TextInput style={styles.input} onChangeText={onChangeEmail} value={email} placeholder="Email"/>
          <TextInput style={styles.input} onChangeText={onChangePassword} value={password} placeholder="Password" secureTextEntry={true} />
          <Button type="primary" style={{ height: 40, margin: 12, borderWidth: 1, padding: 10, backgroundColor: "#4053FA"}} onPress={() => talkToFireBase(fullName, email, password)}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Sign up
            </Text>
          </Button>
        </View>
      </SafeAreaProvider>
    </SafeAreaView >
  )
}

function talkToFireBase(fn, e, p) {
  console.log(fn);
  console.log(e);
  console.log(p);
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
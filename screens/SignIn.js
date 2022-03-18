import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '@ant-design/react-native';

const SignIn = () => {

  const [email, onChangeEmail] = React.useState();
  const [password, onChangePassword] = React.useState();

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaProvider>
        <StatusBar />
        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
          <View style={{flex: 0.1, flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 24}}>
              SignIn Screen
            </Text>
          </View>
          <TextInput style={styles.input} onChangeText={onChangeEmail} value={email} placeholder="Email"/>
          <TextInput style={styles.input} onChangeText={onChangePassword} value={password} placeholder="Password" secureTextEntry={true} />
          <Button type="primary" style={{ height: 40, margin: 12, borderWidth: 1, padding: 10, backgroundColor: "#4053FA"}} onPress={() => talkToFireBase(email, password)}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Sign up
            </Text>
          </Button>
        </View>
      </SafeAreaProvider>
    </SafeAreaView >
  )
}

function talkToFireBase(e, p) {
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

export default SignIn

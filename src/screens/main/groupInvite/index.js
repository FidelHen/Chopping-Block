import React from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import { Button } from '@ant-design/react-native';

const GroupInvite = ({ navigation }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
      <View style={styles.title}>
        <Text style={{ fontSize: 40, letterSpacing: 0, opacity: 1 }}>
          Who's all
        </Text>
        <Text style={{ fontSize: 40, letterSpacing: 0, opacity: 1, }}>
          coming?
        </Text>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container2}>
            <View style={{ flex: .2, justifyContent: "space-evenly" }}>
              <Text style={{ fontSize: 15, letterSpacing: 0, opacity: 1, left: 14 }}>
                Friend Email
              </Text>
              <TextInput style={styles.input} />
            </View>
            <View style={styles.buttons}>
              <Button type="primary" style={{ flex: 1, backgroundColor: "#4053FA" }} onPress={() => navigation.navigate("Home")} >
                <Text style={{ fontSize: 18, fontWeight: "600", height: 40, margin: 12 }}>
                  Next
                </Text>
              </Button>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: .75,
    flexDirection: "column",
    justifyContent: "space-evenly",

  },
  container2: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "5%",
    justifyContent: "space-around",

  },
  title: {
    flex: 0.2,
    flexDirection: "column",
    justifyContent: "center",
    left: "30%",
    marginTop: "10%",
  },
  buttons: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});

export default GroupInvite

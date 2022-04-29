import { useState } from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import { Button } from '@ant-design/react-native';
import { auth } from '../../../firebase/firebase';
import { db } from '../../../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';

const Cravings = ({ navigation }) => {

  const [perf, setPerf] = useState([]);

  async function addCravingsToUser(perf) {
    const docRef = doc(db, 'users', auth.currentUser?.uid);
    await setDoc(docRef, { 
      perferences: perf 
    }, { merge: true }).then(() => {
      alert("Added Preferences Successfully")
    }).catch(error => {
      alert("Error adding preferences");
      alert(error.messages);
    });
  }

  return (
    <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-evenly", }}>
      <View style={styles.title}>
        <Text style={{ fontSize: 49, letterSpacing: 0, opacity: 1 }}>
          What are you
        </Text>
        <Text style={{ fontSize: 49, letterSpacing: 0, opacity: 1, }}>
          craving?
        </Text>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container2}>
            <View style={{ flex: .1, justifyContent: "space-evenly", }}>
              <Text style={{ fontSize: 15, letterSpacing: 0, opacity: 1 }}>
                Prefrences
              </Text>
              <TextInput onChangeText={setPerf} value={perf} placeholder="Ex. Vegan, Korean, Mexican" />
            </View>
            <View style={styles.buttons}>
              <Button type="primary" style={{ flex: 0.75, backgroundColor: "#4053FA" }} onPress={() => {
                const perfArray = perf.split(",").map((value) => value.trim().toLowerCase())
                console.log(perfArray)
                addCravingsToUser(perfArray)
                navigation.navigate("Home")
              }} >
                <Text style={{ fontSize: 18, fontWeight: "600" }}>
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
    left: "10%",
    marginTop: "10%",
  },
  buttons: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  }
});

export default Cravings

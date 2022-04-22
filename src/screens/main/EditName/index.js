import { useState, useIsFocused } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Button } from '@ant-design/react-native';
import { auth } from '../../../firebase/firebase';
import { db } from '../../../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';

const EditName = ({ navigation }) => {

  const [name, setName] = useState();

  async function updateName(newName) {
    const docRef = doc(db, 'users', auth.currentUser?.uid);
    await setDoc(docRef, { 
      full_name: newName 
    }, { merge: true }).then(() => {
      alert("Edited Name Successfully")
    }).catch(error => {
      alert("Error editing name");
      alert(error.messages);
    });
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <SafeAreaProvider>
        <StatusBar />
        <View style={{ flex: 0.40, marginLeft: '5%', justifyContent: 'center' }}>
          <TouchableOpacity style={{ width: '10%' }} onPress={() => navigation.navigate("Settings")}>
            <AntDesign name='left' size={28} color="#000000" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.8, alignContent: 'center', justifyContent: 'flex-end' }}>
          <View style={{ flex: 0.3, flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24 }}>
              Edit Name
            </Text>
          </View>
          <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Name" />
        </View>
        <View style={{ flex: 0.8, alignContent: 'center' }}>
          <Button type="primary" style={{ height: 40, margin: 12, borderWidth: 1, padding: 10, backgroundColor: "#4053FA" }} onPress={() => {
            updateName(name)
            navigation.navigate("Settings")
          }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Update
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


export default EditName

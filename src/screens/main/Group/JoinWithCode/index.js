import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "@ant-design/react-native";
import { AntDesign } from '@expo/vector-icons';

const JoinWithCode = ({ navigation }) => {

  const [code, setCode] = useState();

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <SafeAreaProvider>
        <StatusBar />
        <View style={{ flex: 0.30, marginLeft: '5%', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <AntDesign name='left' size={28} color="#000000" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.5, marginLeft: '5%', justifyContent: 'left' }}>
          <Text style={{ fontSize: 38 }}>
            Enter Group Code!
          </Text>
        </View>
        <View>
          <TextInput style={styles.input} onChangeText={setCode} value={code} placeholder="Group Code" keyboardType = 'numeric' maxLength={5} />
          <Button type="primary" style={{ height: 40, margin: 12, borderWidth: 1, padding: 10, backgroundColor: "#4053FA" }} onPress={() => console.log(code)}>
            <Text style={{ fontSize: Platform.OS == "ios" ? 18 : 14, fontWeight: "700" }}>
              Join Group
            </Text>
          </Button>
        </View>
      </SafeAreaProvider>
    </KeyboardAvoidingView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
  },
  title: {
    flex: 0.45,
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: "2%",
    alignContent: "center",
  },
  image_container: {
    flex: 0.5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});

export default JoinWithCode
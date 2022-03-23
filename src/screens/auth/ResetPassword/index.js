import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, 
  TouchableWithoutFeedback, Keyboard, TextInput} from 'react-native';
import { Button } from '@ant-design/react-native';

const Reset_Password = () => {
    return (
      <View style={styles.container}>
      <View style={styles.title}>
      <Text style={{ fontSize: 27, letterSpacing: 0, opacity: 1 }}>
      Reset Password
        </Text>
      </View>
         <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={styles.container}
       >
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
           <View style={styles.inner}>
             <TextInput placeholder="New Password" style={styles.textInput} secureTextEntry={true} />
           </View>
         </TouchableWithoutFeedback>
       </KeyboardAvoidingView>
       <View style={styles.buttons}>
       <Button type="primary" style={{ flex : .88, backgroundColor: "#4053FA" }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Reset
          </Text>
        </Button>
         </View>
      </View>
    )
}

const styles = StyleSheet.create({
   
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
    },
    container: {
      flex: 1
    },
    inner: {
      padding: 24,
      flex: 1
    },
    textInput: {
      height: 40,
      borderColor: "#000000",
      borderBottomWidth: 1,
      marginBottom: 36
    },
    btnContainer: {
      backgroundColor: "white",
      marginTop: 12
    }
  });

  
  export default Reset_Password
  
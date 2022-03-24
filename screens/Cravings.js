import React from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, 
  TouchableWithoutFeedback, Keyboard, View, Dimensions } from 'react-native';
import DrinkSVG from '../svgs/drinkSVG';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '@ant-design/react-native';

const entireScreenWidth = Dimensions.get('window').width;
const entireScreenHeight = Dimensions.get('window').height;

const Cravings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 49, letterSpacing: 0, opacity: 1 }}>
          What are you
        </Text>
        <Text style={{ fontSize: 49, letterSpacing: 0, opacity: 1, }}>
          craving?
        </Text>
      </View>
    
      
      <View style={styles.container}>
      
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container2}>
      <Text style = {{ fontSize: 15, letterSpacing: 0, opacity: 1}}>
      Prefrences
      </Text>
       <TextInput placeholder="Ex. Vegan, Korean, Mexican" style={styles.textInput} />
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

        </View>


      
      
     
      <View style={styles.buttons}>
        <Button type="primary" style={{ flex: 0.75, backgroundColor: "#4053FA" }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
           Done
          </Text>
        </Button>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: .75,
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  container2: {
    flex: .2,
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "5%",
  },
  tester: {
    flex: 1,
    flexDirection: "column",
    left: "10%",
  },
  title: {
    flex: 0.2,
    flexDirection: "column",
    justifyContent: "center",
    left: "10%",
    marginTop: "10%",
  },
  image_container: {
    flex: 0.3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  image_text: {
    flex: 0.2,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  small_circles: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "44%",
    marginRight: "44%",
  },
  buttons: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  }
 
  
 
 
 
});

export default Cravings

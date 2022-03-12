import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SushiSVG from '../svgs/sushiSVG';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '@ant-design/react-native';

const entireScreenWidth = Dimensions.get('window').width;
const entireScreenHeight = Dimensions.get('window').height;

const Landing2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaProvider>
        <StatusBar />
        <View style={styles.title}>
          <Text style={{ fontSize: 49, letterSpacing: 0, opacity: 1 }}>
            Chopping
          </Text>
          <Text style={{ fontSize: 49, letterSpacing: 0, opacity: 1 }}>
            Block
          </Text>
        </View>
        <View style={styles.image_container}>
          <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
            <AntDesign name='left' size={24} color="#00000017" />
          </TouchableOpacity>
          <SushiSVG />
          <TouchableOpacity onPress={() => navigation.navigate('Landing3')}>
            <AntDesign name='right' size={24} color="#00000017" />
          </TouchableOpacity>
        </View>
        <View style={styles.image_text}>
          <Text style={{ fontSize: 27, fontWeight: "bold", letterSpacing: 0, opacity: 1 }}>
            Loren Ipsum dolor sit
          </Text>
          <Text style={{ fontSize: 20, paddingLeft: "12.5%", paddingRight: "12.5%", textAlign: "center", letterSpacing: 0, opacity: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec felis placerat, vulputate nisi quis.
          </Text>
        </View>
        <View style={styles.small_circles}>
          <View style={{ height: "16%", width: "20%", borderRadius: "100000%", backgroundColor: "#00000026" }} />
          <View style={{ height: "16%", width: "20%", borderRadius: "100000%", backgroundColor: "#4053FA" }} />
          <View style={{ height: "16%", width: "20%", borderRadius: "100000%", backgroundColor: "#00000026" }} />
        </View>
        <View style={styles.buttons}>
          <Button type="primary" style={{ flex: 0.35, backgroundColor: "#4053FA" }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Sign up
            </Text>
          </Button>
          <Button style={{ flex: 0.35, borderWidth: 2, borderColor: "#4053FA" }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "#4053FA" }}>
              Sign in
            </Text>
          </Button>
        </View>
      </SafeAreaProvider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "#fff"
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
    justifyContent: "flex-end",
    padding: "5%",
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

export default Landing2

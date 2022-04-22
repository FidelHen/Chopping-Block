import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Card } from "@ant-design/react-native";
import { Button } from "@ant-design/react-native";
import { AntDesign } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";
import LoadingScreen from "../../../../components/LoadingScreen";

const GroupInvite = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dummyData = [
    {
      name: "Peter Glover",
    },
    {
      name: "James Williams",
    },
    {
      name: "Brian Gonzales",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <LoadingScreen title="Creating group..." />;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#4053FA",
      }}
    >
      <StatusBar style="light" />
      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "space-between",
          backgroundColor: "#4053FA",
        }}
      >
        <View
          style={{
            flex: 0.15,
            marginLeft: "5%",
            marginRight: "5%",
            marginTop: "5%",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={28} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.leaveButton}>Leave</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Group code</Text>
          <Text style={styles.title}>1234</Text>
        </View>
        <ScrollView style={styles.scrollViewContainer}>
          {dummyData.map((item, index) => {
            //TODO: Error when rendering profile image
            const profileImage = `https://avatars.dicebear.com/api/bottts/:${item.name}.svg`;

            return (
              <Card style={styles.profileCardContainer}>
                <View style={styles.profileCard}>
                  {/* <SvgUri
                    style={styles.profileImage}
                    uri={profileImage ?? ""}
                  /> */}
                  <Text style={styles.profileName}>{item.name}</Text>
                  <AntDesign name="check" size={25} color="#52C41A" />
                </View>
              </Card>
            );
          })}
        </ScrollView>
        <View style={styles.buttons}>
          <Button
            type="primary"
            style={{
              flex: 1,
              backgroundColor: "#4053FA",
              borderColor: "white",
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                height: 40,
                margin: 12,
              }}
            >
              Next
            </Text>
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  leaveButton: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.5,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  scrollViewContainer: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: "5%",
  },
  profileCardContainer: {
    marginTop: "2%",
    marginLeft: "4%",
    marginRight: "4%",
  },
  profileCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "5%",
    marginTop: 3,
    height: 55,
  },
  profileImage: {
    width: 50,
    height: 50,
    marginRight: "5%",
  },
  profileName: {
    fontSize: 18,
    fontWeight: "600",
    flex: 1,
  },
});

export default GroupInvite;

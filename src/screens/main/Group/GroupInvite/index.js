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
import { auth, db } from "../../../../firebase/firebase";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  writeBatch,
} from "firebase/firestore";

const GroupInvite = ({ navigation }) => {
  const [groupData, setGroupData] = useState({
    group_code: null,
    participants: [],
    group_uid: null,
  });
  const [isGeneratingCode, setisGeneratingCode] = useState(true);

  useEffect(() => {
    handleCreateGroup();
  }, []);

  const handleCreateGroup = async () => {
    setisGeneratingCode(true);

    const currentUserDoc = await getDoc(doc(db, "users", auth.currentUser.uid));
    const groupDocRef = doc(collection(db, "groups"));
    const batch = writeBatch(db);

    let roomCode = Math.floor(1000 + Math.random() * 9000);
    console.log(roomCode);

    const groupData = {
      group_code: roomCode,
      participants: [
        {
          name: currentUserDoc.data().full_name,
          uid: auth.currentUser.uid,
          perferences: currentUserDoc.data().perferences,
        },
      ],
      group_uid: groupDocRef.id,
      reccomendations: [],
    };

    batch.set(groupDocRef, groupData);
    batch.set(
      currentUserDoc.ref,
      {
        joined_groups: arrayUnion(groupDocRef.id),
      },
      { merge: true }
    );

    await batch.commit().catch((error) => {
      console.log(error);
    });
    console.log("Group created");
    setGroupData(groupData);
    setisGeneratingCode(false);
  };

  if (isGeneratingCode) {
    return <LoadingScreen title="Generating code..." />;
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
          <TouchableOpacity></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.leaveButton}>Leave group</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Group code</Text>
          <Text style={styles.title}>{groupData.group_code}</Text>
        </View>
        <ScrollView style={styles.scrollViewContainer}>
          {groupData.participants.map((item) => {
            return (
              <Card
                style={styles.profileCardContainer}
                key={`profileCard${item.name}`}
              >
                <View style={styles.profileCard}>
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
            onPress={() => {
              navigation.navigate("GroupVote", {
                ...groupData,
              });
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                height: 40,
                margin: 12,
              }}
            >
              Get recommendations
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
    fontSize: 16,
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

import React, { useEffect, useState, useRef, useMemo } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { SvgUri } from "react-native-svg";
import { StatusBar } from "expo-status-bar";
import { mapStyleDark } from "./mapStyle";
import * as Location from "expo-location";
import BottomSheet from "@gorhom/bottom-sheet";
import RestaurantBottomSheet from "../../../components/RestaurantBottomSheet";
import PrimaryMapButton from "../../../components/PrimaryMapButton";
import fakeRestaurantData from "../../../utils/fakeRestuarantData";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../../../firebase/firebase";
import { db } from "../../../firebase/firebase";
import { getDoc, doc, arrayUnion, setDoc } from "firebase/firestore";
import LoadingScreen from "../../../components/LoadingScreen";

const Home = ({ navigation }) => {
  const bottomSheetRef = useRef(null);
  const [location, setLocation] = useState(null);
  const windowHeight = Dimensions.get("window").height;
  const percentage = Math.round((500 / windowHeight) * 100);
  const snapPoints = useMemo(() => ["25%", `${percentage}%`], []);
  const [isLoading, setIsLoading] = useState(true);
  const [locationGranted, setLocationGranted] = useState(true);
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Location permission not granted");
        setIsLoading(false);
        setLocationGranted(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      grabInitialRecommendations(location);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <LoadingScreen title="Loading..." />;
  }

  if (!locationGranted) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Please navigate to settings and allow location</Text>
      </View>
    );
  }

  async function grabInitialRecommendations(loc) {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer YZcky4x_RQQBWsAQyIv6_8f9yOFMghMIxPKZ0qRRQ8uQEYSfTGm7P0TY4REvwbHId-MiOmxlk7Jc-EAazkEG4ZfRBriaK8IPfrp8BcaDcjr9QTd_XLEPvHd8wroGYnYx"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const docRef = doc(db, "users", auth.currentUser?.uid);
    const docSnap = await getDoc(docRef);
    let categories;
    if (docSnap?.data()["perferences"]) {
      randomUserPerference =
        docSnap.data()["perferences"][
          Math.floor(Math.random() * (docSnap.data()["perferences"].length - 1))
        ].replaceAll(' ', '+');
        categories = `categories=${randomUserPerference}&`;
    } else {
      categories = "";
      console.log("No data");
    }

    let currData = [];
    await fetch(
      `https://api.yelp.com/v3/businesses/search?${categories}latitude=${loc.coords.latitude}&longitude=${loc.coords.longitude}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        data = JSON.parse(result);
        for (let i = 0; i < 3; i++) {
          let tempData = data["businesses"][i];
          let tempDictionary = {
            id: i + 1,
            uid: tempData["id"],
            name: tempData["name"],
            address: tempData["location"]["address1"],
            services: "Dine-in · Takeout",
            rating: tempData["rating"],
            reviews: tempData["review_count"],
            image: tempData["image_url"],
            cuisine: "Not implemented",
            latitude: tempData["coordinates"]["latitude"],
            longitude: tempData["coordinates"]["longitude"],
            url: tempData["url"],
          };
          currData.push(tempDictionary);
        }
        setRestaurantData(currData);
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <View>
      <StatusBar style="light" />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={mapStyleDark}
        region={{
          latitude: location ? location.coords.latitude : 35.2270869,
          longitude: location ? location.coords.longitude : -80.8431267,
          latitudeDelta: 0.8,
          longitudeDelta: 0.0121,
        }}
      >
        <SafeAreaView>
          <View style={styles.profileButtonContainer}>
            <TouchableOpacity
              style={styles.profileButton}
              onPress={() => navigation.navigate("Settings")}
            >
              <SvgUri
                uri="https://avatars.dicebear.com/api/bottts/:choppingblock.svg"
                width="80%"
                height="80%"
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        {restaurantData.map((restaurant, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: restaurant.latitude,
                longitude: restaurant.longitude,
              }}
              title={restaurant.name}
              onPress={() => { 
                Alert.alert(
                  restaurant.name,
                  "Add to favorites?",
                  [
                    {
                      text: "No",
                      style: "cancel"
                    },
                    { text: "Yes",
                      onPress: async () => { 
                        const docRef = doc(db, "users", auth.currentUser?.uid);
                        await setDoc(docRef, {"favorites": arrayUnion(restaurant)}, {merge: true})
                        .then(() => { Alert.alert("Restaurant added to favorites") })
                        .catch((err) => {console.log(err)}); 
                      }
                    }
                  ]
                );
               }}
            />
          );
        })}
        <Marker coordinate={location ? location.coords : {}}>
          <View style={styles.userLocationMarker} />
        </Marker>
      </MapView>

      <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Group");
          }}
        >
          <PrimaryMapButton />
        </TouchableOpacity>
        <RestaurantBottomSheet restaurants={restaurantData} />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  userLocationMarker: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "white",
    backgroundColor: "#4053FA",
  },
  mapOverlayComponents: {
    position: "absolute",
    bottom: 0,
    display: "flex",
  },
  profileButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "5%",
    marginTop: "10%",
  },
  profileButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default Home;

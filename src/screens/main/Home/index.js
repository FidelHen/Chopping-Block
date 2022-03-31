import React, { useEffect, useState, useRef, useMemo } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { StatusBar } from 'expo-status-bar';
import { mapStyleDark } from './mapStyle';
import * as Location from 'expo-location';
import BottomSheet from '@gorhom/bottom-sheet';
import RestaurantBottomSheet from '../../../components/RestaurantBottomSheet';
import PrimaryMapButton from '../../../components/PrimaryMapButton';
import fakeRestaurantData from '../../../utils/fakeRestuarantData';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../../../firebase/firebase';

const Home = ({ navigation }) => {
  const bottomSheetRef = useRef(null);
  const [location, setLocation] = useState(null);
  const snapPoints = useMemo(() => ['25%', '65%'], []);

  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.navigate("Landing")
    })
      .catch(error => {
        alert(error.message)
      });
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Location permission not granted');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(JSON.stringify(location));
      setLocation(location);
    })();
  }, [])

  return (
    <View>
      <StatusBar style='light' />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={mapStyleDark}
        region={{
          latitude: 35.2270869,
          longitude: -80.8431267,
          latitudeDelta: 0.8,
          longitudeDelta: 0.0121,
        }}
      >
        <SafeAreaView>
          <View >
            <TouchableOpacity style={styles.profileButton} onPress={() => handleSignOut()}>
              <SvgUri uri='https://avatars.dicebear.com/api/bottts/:choppingblock.svg' width="80%" height="80%" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        {fakeRestaurantData.map((restaurant, index) => {
          return (
            <Marker
              key={index}
              coordinate={{ latitude: restaurant.latitude, longitude: restaurant.longitude }}
              title={restaurant.name}
            />
          );
        })}
        <Marker
          coordinate={location ? location.coords : {}}
        >
          <View style={styles.userLocationMarker} />
        </Marker>
      </MapView>

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
      >
        <TouchableOpacity onPress={() => {navigation.navigate('groupLanding')}}>
          <PrimaryMapButton />
        </TouchableOpacity>
        <RestaurantBottomSheet restaurants={fakeRestaurantData} />
      </BottomSheet>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff"
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  userLocationMarker: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: '#4053FA',
  },
  mapOverlayComponents: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
  },
  profileButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    top: "15%",
    right: "5%",
    position: 'absolute',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Home;
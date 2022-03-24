import React, { useEffect, useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, View } from 'react-native';
import {mapStyleLight} from './mapStyle';
import * as Location from 'expo-location';

const Home = () => {
  const [location, setLocation] = useState(null);

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
        <StatusBar/>
        <MapView
        provider={PROVIDER_GOOGLE} 
        style={styles.map}
        customMapStyle={mapStyleLight}
        region={{
          latitude: 35.2270869,
          longitude: -80.8431267,
          latitudeDelta: 0.8,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker
            coordinate={location ? location.coords : {}}
        >
          <View style={styles.userLocationMarker}>
          </View>
        </Marker>
      </MapView>
      </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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
    
  }
});

export default Home;

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Landing from './screens/Landing';
import Landing2 from './screens/Landing2';
import Landing3 from './screens/Landing3';
import Cravings from './screens/Cravings';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaProvider>
        <StatusBar />
        {/*<Landing />  */}
        {/*<Landing2 /> */}
        {/*<Landing3 /> */}
        <Cravings />

      </SafeAreaProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

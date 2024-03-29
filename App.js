import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import Intro from './app/screens/Intro';
import Splash from './app/screens/Splash';

export default function App() {

  console.log(useDeviceOrientation());


  return (
    <>
      {/* <Splash /> */}
      <Intro />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

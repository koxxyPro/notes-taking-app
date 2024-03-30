import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import Intro from './app/screens/Intro';
import Splash from './app/screens/Splash';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteScreen from './app/screens/NoteScreen';

export default function App() {

  console.log(useDeviceOrientation());

  const [person, setPerson] = useState({});

  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');
    if (result !== null) {
      setPerson(JSON.parse(result));
    }
  }

  useEffect(() => {
    findUser()
  }, [])

  if (!person.name) return <Intro onFinish={findUser} />

  return (
    <NoteScreen person={person} />
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

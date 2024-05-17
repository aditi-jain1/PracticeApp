import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import StartScreen from './components/StartScreen'; // Import the HomeScreen component
import HomeScreen from './components/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20, // Add margin to the top of the button
    padding: 10, // Add padding around the button text
    borderRadius: 5, // Add border radius to make the button rounded
    borderWidth: 1, // Add border width to give the button a border
    borderColor: '#841584', // Set the border color of the button
  },
});

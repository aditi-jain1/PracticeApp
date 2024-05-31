import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import InputScreen from './components/InputScreen';
import HomeScreen from './components/HomeScreen';
import Riders from './components/Riders';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={InputScreen} 
          options={{
            headerStyle: {
              backgroundColor: '#EBF5FB', // Set the background color of the navigation bar
            },
            headerTintColor: '#7994C7', // Set the text color of the navigation bar
            headerTitleStyle: {
              fontWeight: 'bold', // Optionally make the title bold
            },
          }} 
        />
        <Stack.Screen
          name="Riders"
          component={Riders}
        />
      </Stack.Navigator>
    </NavigationContainer>
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

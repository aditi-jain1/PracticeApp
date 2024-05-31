import React, { useState, useEffect } from 'react';
import { useFonts, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([{}]);
  const [fontsLoaded] = useFonts({
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  /*
  useEffect(() => {
    fetch("http://192.168.86.197:5000/requests")
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log("hello");
        console.log(data);
      });
  }, []);
  */

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>voyage</Text>
        <Text style={styles.description}>
          Carpooling made easy for students! Use Voyage to find ride buddies, cut travel costs, and enjoy a greener commute to your destinations.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.buttonText}>Get Started!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Riders')}
        >
          <Text style={styles.buttonText}>Cards</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.animationContainer}>
        <LottieView
          source={require('./homeAnimation.json')}
          autoPlay
          resizeMode='cover'
          loop
          style={styles.animation}
          onAnimationFinish={() => console.log('Animation Finished')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF5FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 72, // Increased font size
    fontWeight: 'bold',
    color: '#7994C7',
    marginBottom: 20,
    fontFamily: 'Quicksand_700Bold',
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'left',
    marginBottom: 20,
    paddingHorizontal: 30,
    
  },
  button: {
    backgroundColor: '#F5C674', 
    marginTop: 20,
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#F5C674', // Black border color
    alignItems: 'center',
    // Shadow properties
    shadowColor: '#99AACB',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5, // For Android
  },
  buttonText: {
    color: '#24354B', // White text color
    fontSize: 20,
    padding: 10,
  },
  animationContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  animation: {
    flexGrow: 1,
    width: '100%',
    height: 400,
  },
});

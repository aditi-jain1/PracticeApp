import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function HomeScreen({ navigation }) { // Note the added navigation prop
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("http://192.168.86.197:5000/requests")
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log("hello");
        console.log(data);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Welcome to My App!</Text>
      <LottieView
        source={require('./introAnimation.json')}
        
        autoPlay
        loop
        style={styles.animation}
        onAnimationFinish={() => console.log('Animation Finished')}
      />
      <Button
        title="Get Started!"
        onPress={() => navigation.navigate('Input Screen')} // Use the navigation prop here
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        style={styles.button}
      />
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
  animation: {
    width: 300,
    height: 300,
  },
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#841584',
  },
});

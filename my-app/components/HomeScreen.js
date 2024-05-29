import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([{}]);
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
        <Button
          title="Get Started!"
          onPress={() => navigation.navigate('Input Screen')}
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          style={styles.button}
        />
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
    fontSize: 42,
    fontWeight: 'bold',
    color: '#F1BE71',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'left',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#841584',
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

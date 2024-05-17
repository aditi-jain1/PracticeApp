import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("http://192.168.86.197:5000/requests").then(
        res => res.json()
    ).then(
        data => {
            setData(data)
            console.log("heloo")
            console.log(data)
        }
    )
  }, [])

  return (
    <View style={styles.container}>
      <Text>Welcome to Myhfh App!</Text>
      <Button
        title="Press hweMsfse"
        onPress={alert}
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
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#841584',
  },
});

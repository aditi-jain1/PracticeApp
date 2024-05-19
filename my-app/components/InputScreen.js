import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import RequestForm from './RequestForm';

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
      <Text>Welcome Input Screen</Text>
      <RequestForm />
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

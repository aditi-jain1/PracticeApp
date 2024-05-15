import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to My App!</Text>
      <Button
        title="Press Me"
        onPress={() => {
          // Action to perform when the button is pressed
          alert('Button Pressedtf!');
        }}
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

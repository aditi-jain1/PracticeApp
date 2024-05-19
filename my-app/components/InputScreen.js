import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RequestForm from './RequestForm';

export default function InputScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      {/* Add your input form or other components here */}
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
});

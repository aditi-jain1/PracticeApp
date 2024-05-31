import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RequestForm from './RequestForm';

export default function InputScreen() {
  return (
    <View style={styles.container}>

      {/* Add your input form or other components here */}
      <RequestForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',

  },
});

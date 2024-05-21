import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Switch, StyleSheet, TouchableOpacity, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function RequestForm() {
  const [name, setName] = useState('Jane Doe');
  const [number, setNumber] = useState('0123456789');
  const [isChecked, setIsChecked] = useState(true);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [startLocation, setStartLocation] = useState('');
  const [destination, setDestination] = useState('');

  const [startDescription, setStartDescription] = useState('');
  const [destinationDescription, setDestinationDescription] = useState('');

  const [startLat, setStartLat] = useState('');
  const [startLong, setStartLong] = useState('');
  const [destinationLat, setDestinationLat] = useState('');
  const [destinationLong, setDestinationLong] = useState('');

  const startRef = useRef();
  const destinationRef = useRef();

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const onChangeTime = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowTimePicker(false);
    setDate(currentDate);
  };


  const handleSubmit = () => {
    const requestData = {
      name,
      phoneNumber: number,
      departureTime: date.toISOString(),
      startingLocationDescription: startDescription,
      startingLat: startLat,
      startingLong: startLong,
      destinationDescription,
      destinationLat,
      destinationLong
    };

    fetch('http://192.168.86.197:5000/addRequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.formContainer}>
        <View style={styles.formGroup}>
          <Text>Name:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.formGroup}>
          <Text>Number:</Text>
          <TextInput
            style={styles.input}
            value={number}
            onChangeText={setNumber}
          />
        </View>
        <View style={styles.formGroup}>
          <Text>Checkbox:</Text>
          <Switch
            value={isChecked}
            onValueChange={setIsChecked}
          />
        </View>
        <View style={styles.formGroup}>
          <Text>Starting Location:</Text>
          <GooglePlacesAutocomplete
            placeholder="Search for location"
            ref={startRef}
            keepResultsAfterBlur={true}
            query={{
              key: 'AIzaSyBS2Bw9K4A-B2i9NtfhPUxus6GBAySlw68',
              language: 'en',
            }}
            disableScroll={true}
            fetchDetails={true}
            onPress={(data, details = null) => {
              console.log(data, details);
              setStartLocation(data.description);
              setStartLat(details.geometry.location.lat.toString());
              setStartLong(details.geometry.location.lng.toString());
              setStartDescription(data.description);
              startRef.current?.blur();
            }}
            onFail={(error) => console.error(error)}
            textInputProps={{
              value: startLocation,
              onChangeText: (text) => setStartLocation(text),
            }}
            styles={{
              textInputContainer: {
                width: '100%',
              },
              textInput: {
                height: 38,
                color: '#5d5d5d',
                fontSize: 16,
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
            }}
          />
        </View>
        <View style={styles.formGroup}>
          <Text>Destination:</Text>
          <GooglePlacesAutocomplete
            placeholder="Search for location"
            ref={destinationRef}
            keepResultsAfterBlur={true}
            query={{
              key: 'AIzaSyBS2Bw9K4A-B2i9NtfhPUxus6GBAySlw68',
              language: 'en',
            }}
            disableScroll={true}
            fetchDetails={true}
            onPress={(data, details = null) => {
              console.log(data, details);
              setDestination(data.description);
              setDestinationLat(details.geometry.location.lat.toString());
              setDestinationLong(details.geometry.location.lng.toString());
              setDestinationDescription(data.description);
              destinationRef.current?.blur();
            }}
            onFail={(error) => console.error(error)}
            textInputProps={{
              value: destination,
              onChangeText: (text) => setDestination(text),
            }}
            styles={{
              textInputContainer: {
                width: '100%',
              },
              textInput: {
                height: 38,
                color: '#5d5d5d',
                fontSize: 16,
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
            }}
          />
        </View>
        <View style={styles.formGroup}>
          <Text>Date: {date.toDateString()}</Text>
          <TouchableOpacity style={styles.button} onPress={() => setShowDatePicker(true)}>
            <Text style={styles.buttonText}>Choose Date</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChangeDate}
            />
          )}
        </View>
        <View style={styles.formGroup}>
          <Text>Time: {date.toLocaleTimeString()}</Text>
          <TouchableOpacity style={styles.button} onPress={() => setShowTimePicker(true)}>
            <Text style={styles.buttonText}>Choose Time</Text>
          </TouchableOpacity>
          {showTimePicker && (
            <DateTimePicker
              value={date}
              mode="time"
              display="default"
              onChange={onChangeTime}
            />
          )}
        </View>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    flex: 1,
  },
  formGroup: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});

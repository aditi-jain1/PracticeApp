import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function RequestForm() {
    
  
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

  const [name, setName] = useState('Jane Doe');
  const [number, setNumber] = useState('0123456789');
  const [isChecked, setIsChecked] = useState(true);
  const [selectedOption, setSelectedOption] = useState('option2');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

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

  return (
    <View style={styles.formContainer}>
      <View style={styles.formGroup}>
        <Text>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style = {styles.formGroup}>
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
        <Text>Airport: </Text>
        <View style={styles.radioGroup}>
          <Text onPress={() => setSelectedOption('option1')}>
            {selectedOption === 'option1' ? '◉' : '○'} OAK
          </Text>
          <Text onPress={() => setSelectedOption('option2')}>
            {selectedOption === 'option2' ? '◉' : '○'} SFO
          </Text>
          <Text onPress={() => setSelectedOption('option3')}>
            {selectedOption === 'option3' ? '◉' : '○'} SJC
          </Text>
        </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 20,
    padding: 10,
  },
  formGroup: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});

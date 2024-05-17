import React from 'react';
import { View, Text, TextInput, Switch, StyleSheet } from 'react-native';

export default function RequestForm() {
  const [text, setText] = React.useState('Some initial value');
  const [isChecked, setIsChecked] = React.useState(true);
  const [selectedOption, setSelectedOption] = React.useState('option2');

  return (
    <View style={styles.formContainer}>
      <View style={styles.formGroup}>
        <Text>Text input:</Text>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
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
        <Text>Radio buttons:</Text>
        <View style={styles.radioGroup}>
          <Text onPress={() => setSelectedOption('option1')}>
            {selectedOption === 'option1' ? '◉' : '○'} Option 1
          </Text>
          <Text onPress={() => setSelectedOption('option2')}>
            {selectedOption === 'option2' ? '◉' : '○'} Option 2
          </Text>
          <Text onPress={() => setSelectedOption('option3')}>
            {selectedOption === 'option3' ? '◉' : '○'} Option 3
          </Text>
        </View>
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
});

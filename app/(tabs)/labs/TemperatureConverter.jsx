import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Keyboard } from 'react-native';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleConversion = () => {
    Keyboard.dismiss();
    if (!isNaN(celsius)) {
      const fahrenheitValue = (parseFloat(celsius) * 9/5) + 32;
      setFahrenheit(fahrenheitValue.toFixed(2));
    } else {
      alert('Please enter a valid number for Celsius temperature.');
    }
  };

  return (
    
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.label}>Enter Temperature in Celsius:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numbers-and-punctuation"
        value={celsius}
        onChangeText={text => setCelsius(text)}
        onSubmitEditing={handleConversion}
      />
      <Button
        title="Convert to Fahrenheit"
        onPress={handleConversion}
      />
      {fahrenheit !== '' && (
        <Text style={styles.result}>{`${celsius} Celsius is ${fahrenheit} Fahrenheit`}</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default TemperatureConverter;

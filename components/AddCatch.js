/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

const AddCatchForm = () => {
  const [species, setSpecies] = useState("");
  const [weight, setWeight] = useState("");

  return (
    <View>
      <Text style={styles.header}>Add a catch</Text>
      <TextInput
        value={species}
        style={styles.input}
        placeholder='species'
        onChange={(e) => {setSpecies(e.target.value)}}
      />
      <TextInput
        value={weight}
        style={styles.input}
        placeholder='weight'
        onChange={(e) => {setWeight(e.target.value)}}
      />
      <TouchableOpacity
        style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Add catch</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCatchForm;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  header: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  submitButtonText: {
    color: 'white',
  },
});

/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

class AddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      catch: {},
    };
  }

  handleSpecies = (text) => {
    let newCatch = this.state.catch;
    newCatch.species = text;
    this.setState({ catch: newCatch });
  }

  handleWeight = (text) => {
    let newCatch = this.state.catch;
    newCatch.weight = text;
    this.setState({ catch: newCatch });
  }

  render() {
    return (
      <View>
        <Text style={styles.header}>Add a catch</Text>
        <TextInput
          style={styles.input}
          placeholder='species'
          onChangeText={this.handleSpecies}
        />
        <TextInput
          style={styles.input}
          placeholder='weight'
          onChangeText={this.handleWeight}
        />
        <TouchableOpacity
          style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Get GPS location</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Get weather info</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Add catch</Text>
        </TouchableOpacity>
      </View >
    );
  }
}

export default AddForm;

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

/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import helper from '../utils/helper.js';
import LocationButton from './LocationButton.js';
import WeatherButton from './WeatherButton.js';
import { addCatch } from '../services/Database.js';

class AddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      catch: {
        date: Date.now(),
        coordinates: {
          latitude: 999,
          longitude: 999,
        },
        weather: {
          temperature: 0,
          description: 'n/a',
          wind: 0,
          icon: 'n/a',
        },
      },
    };
  }

  handleSpecies = (text) => {
    let newCatch = this.state.catch;
    newCatch.species = text;
    this.setState({ catch: newCatch });
  }

  handleWeight = (text) => {
    let newCatch = this.state.catch;
    newCatch.weight = Number(text);
    this.setState({ catch: newCatch });
  }

  handleAddNewCatch = async () => {
    let newCatch = this.state.catch;
    newCatch.id = helper.uniqueID();
    this.setState({ catch: newCatch });
    this.props.addCatch(oldCatches => [...oldCatches, newCatch]);
    await addCatch(this.state.catch);
  }

  addCatchToDB = async () => {
    let newCatch = this.state.catch;
    if (!newCatch.coordinates) {

    }
    newCatch.id = helper.uniqueID();
    this.setState({ catch: newCatch });
    await addCatch(this.state.catch);
  }


  handleLocating = async (coordinatesObject) => {
    let newCatch = this.state.catch;
    newCatch.coordinates = {
      latitude: coordinatesObject.latitude,
      longitude: coordinatesObject.longitude,
    };
    console.log('addFrom handleLoccating' + JSON.stringify(newCatch.coordinates));

    this.setState({ catch: newCatch });
  }

  handleWeatherInfo = (weatherObject) => {
    if (!this.props.apiKey) {
      this.props.setModalViewVisible(true);
    } else {
      console.log('AddForm.handleWeatherInfo ' + JSON.stringify(weatherObject));
      let newCatch = this.state.catch;
      newCatch.weather = {
        temperature: weatherObject.main.temp,
        description: weatherObject.weather[0].description,
        wind: weatherObject.wind.speed,
        icon: weatherObject.weather[0].icon,
      };
      this.setState({ catch: newCatch });
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.header}>Add a catch</Text>
        <TextInput
          style={styles.input}
          placeholder="species"
          onChangeText={this.handleSpecies}
        />
        <TextInput
          style={styles.input}
          placeholder="weight"
          onChangeText={this.handleWeight}
        />
        <LocationButton
          setLocation={this.handleLocating}
          style={styles.secondaryButton}
          sendNotification={this.props.setMessage}
        />
        <WeatherButton
          setWeather={this.handleWeatherInfo}
          coordinates={this.state.catch.coordinates}
          style={styles.secondaryButton}
          setModalViewVisible={this.props.setModalViewVisible}
          apiKey={this.props.apiKey}
          sendNotification={this.props.setMessage}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.addCatchToDB}
        >
          <Text style={styles.submitButtonText}>Add catch</Text>
        </TouchableOpacity>
      </View >
    );
  }
}

export default AddForm;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#A686F4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  secondaryButton: {
    backgroundColor: '#86DAFB',
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
  secondaryButtonText: {
    color: 'grey',
  },
});

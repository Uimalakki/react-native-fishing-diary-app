/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import weatherService from '../services/weatherInfo.js';

const WeatherButton = ({ setWeather, coordinates, style, setModalViewVisible, apiKey, sendNotification }) => {

  const handlePress = () => {
    if (coordinates.latitude === 999) {
      sendNotification('Please get location first.');
    } else if (!apiKey) {
      setModalViewVisible(true);
    } else {
      getWeatherInfo();
    }
  };

  const getWeatherInfo = () => {
    console.log('WeatherButton - getWeatherInfo - start');
    const latitude = coordinates.latitude;
    const longitude = coordinates.longitude;

    weatherService.getCurrentWeather(latitude, longitude)
      .then(weatherObject => {
        setWeather(weatherObject);
        console.log('weatherservise is a success!');
    });
    console.log('Weatherbutton onpress end');
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress} style={style}>
        <Text>Get weather info</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WeatherButton;

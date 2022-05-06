import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import weatherService from '../services/weatherInfo.js';

const WeatherButton = ({
  setWeather,
  coordinates,
  style,
  setModalViewVisible,
  apiKey,
  sendNotification,
}) => {
  const handlePress = () => {
    if (coordinates.latitude === 999) {
      sendNotification('Please locate the device first.');
    } else if (!apiKey) {
      setModalViewVisible(true);
    } else {
      getWeatherInfo();
    }
  };

  const getWeatherInfo = () => {
    const latitude = coordinates.latitude;
    const longitude = coordinates.longitude;

    weatherService
      .getCurrentWeather(latitude, longitude)
      .then(weatherObject => {
        console.log(
          'weatherbutton getWeatherinfo weatherservice ' + weatherObject,
        );
        if (weatherObject.length === 0) {
          sendNotification('Faulty API-key!');
        } else {
          setWeather(weatherObject);
        }
      });
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

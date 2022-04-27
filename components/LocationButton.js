/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import coordinateService from '../services/coordinates.js';

const LocationButton = ({ coordinates, setLocation, style, sendNotification }) => {

  const handlePress = () => {
    coordinateService.testCoord(setLocation);
    if (coordinates.latitude === 999) {
      sendNotification("Please enable device's location");
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={style}>
      <Text>Get location</Text>
    </TouchableOpacity>
  );
};

export default LocationButton;

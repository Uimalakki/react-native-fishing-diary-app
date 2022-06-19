import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import coordinateService from '../services/coordinates.js';

const LocationButton = ({coordinates, setLocation, style}) => {
  const handlePress = () => {
    coordinateService.getCoordinates(setLocation);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={style}>
      <Text>Get location</Text>
    </TouchableOpacity>
  );
};

export default LocationButton;

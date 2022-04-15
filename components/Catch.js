/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, Button } from 'react-native';
import { getAllCatches, deleteCatchById } from '../services/Database';

const Catch = ({ species, weight, coordinates, weather, id, removeCatch }) => {

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleDeletingCatch = () => {
    removeCatch(id);
  };

  const showWeatherDetails = weather.description !== 'n/a'
    ? <>
        {'\n'}weather:
        {'\n'}temperature: {weather.temperature}
        {'\n'}description: {weather.description}
        {'\n'}wind: {weather.wind}
      </>
    : <></>;

  const showCoordinates = coordinates.latitude !== 999
    ? <>
        {'\n'}latitude: {coordinates.latitude}
        {'\n'}longitude: {coordinates.longitude}
      </>
    : <></>;

  const viewToShow = showAll
    ? <View>
        <Text style={styles.item} onPress={toggleShowAll}>
          {species}, {weight}kg
          {showCoordinates}
          {showWeatherDetails}
          {'\n'}<Button title="remove" onPress={handleDeletingCatch}/>
        </Text>

      </View>
    : <View>
        <Text style={styles.item} onPress={toggleShowAll}>
          {species}, {weight}kg
        </Text>
      </View>;

  return (
    <View>
      {viewToShow}
    </View>
  );
};

export default Catch;

const styles = StyleSheet.create({
  item: {
    ...Platform.select({
      android: {
        backgroundColor: '#f9c2ff',
      },
      ios: {
        backgroundColor: '#5ac8fa',
      },
    }),
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

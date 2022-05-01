/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, Button } from 'react-native';

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
    ? <View style={styles.selectedItem}>
        <Text style={styles.itemTitle} onPress={toggleShowAll}>
          <Text style={styles.boldFont}>{species}, {weight}kg</Text>
          {showCoordinates}
          {showWeatherDetails}
          {'\n'}<Button title="remove" onPress={handleDeletingCatch}/>
        </Text>

      </View>
    : <View style={styles.item}>
        <Text style={styles.itemTitle} onPress={toggleShowAll}>
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
  boldFont: {
    fontWeight: 'bold',
  },
  item: {
    borderRadius: 20,
    ...Platform.select({
      android: {
        backgroundColor: '#5e639a',
        elevation: 10,
      },
      ios: {
        backgroundColor: '#5ac8fa',
        shadowColor: 'rgb(0, 0, 0)',
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
    }),
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  selectedItem: {
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
    ...Platform.select({
      android: {
        backgroundColor: '#5e639a',
        elevation: 10,
      },
      ios: {
        backgroundColor: '#5ac8fa',
        shadowColor: 'rgb(0, 0, 0)',
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
    }),
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemTitle: {
    ...Platform.select({
      android: {
        color: 'white',
      },
      ios: {
        color: 'black',
      },
    }),
  },

});

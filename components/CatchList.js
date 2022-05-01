/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, { useState } from 'react';
import Catch from './Catch';
import { View, StyleSheet, Text, FlatList, StatusBar } from 'react-native';
import { getAllCatches, deleteCatchById } from '../services/Database';

const CatchList = () => {

  const [fishCatches, setFishCatches] = useState(getAllCatches());

  const removeCatch = (id) => {
    deleteCatchById(id);
    setFishCatches(getAllCatches());
  };
  
  const renderItem = ({ item }) => (
    <Catch
      species={item.species}
      weight={item.weight}
      coordinates={item.coordinates}
      weather={item.weather}
      id={item.id}
      removeCatch={removeCatch}
    />
  );

  const viewToShow = fishCatches.length !== 0
    ? <FlatList 
        data={fishCatches}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    : <Text>No added catches</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Catchlist</Text>
      {viewToShow}
    </View>
  );
};

export default CatchList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

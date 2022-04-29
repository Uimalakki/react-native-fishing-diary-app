/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, { useState, useEffect } from 'react';
import Catch from './Catch';
import { View, StyleSheet, Text, FlatList, StatusBar } from 'react-native';
import { getAllCatches, deleteCatchById } from '../services/Database';
import axios from 'axios';

const CatchList = ({ catches }) => {

  const baseUrl = 'https://stormy-escarpment-48173.herokuapp.com/api/catches';

  const [fishCatches, setFishCatches] = useState([]);

  useEffect(() => {
    getCatches();
  }, []);

  const getCatches = () => {
    axios.get(baseUrl).then(response => {
      setFishCatches(response.data);
    });
  };

  const removeCatch = (id) => {
    //deleteCatchById(id);
    axios.delete(`${baseUrl}/${id}`);
    getCatches();
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

  const viewToShow = fishCatches.length === 0
    ? <FlatList 
        data={fishCatches}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    : <Text>No added catches</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Catchlist</Text>
      {fishCatches.length === 0
        ? <Text>No catches added</Text>
        : <FlatList 
            data={fishCatches}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
      }
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

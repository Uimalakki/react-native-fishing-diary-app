/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import ListItem from './ListItem';
import { View, StyleSheet, Text, FlatList, StatusBar } from 'react-native';

const CatchList = ({catches}) => {

  const renderItem = ({ item }) => (
    <ListItem
      species={item.species}
      weight={item.weight}
    />
  );

  return (
    <View style={styles.container}>
      <Text>Catches</Text>
      <FlatList 
        data={catches}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CatchList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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

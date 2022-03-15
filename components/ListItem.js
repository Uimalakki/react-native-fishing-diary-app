/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';


const ListItem = ({ species, weight }) => {
  return (
    <View>
      <Text style={styles.item}>{species}, {weight}kg</Text>
    </View>
  );
};

export default ListItem;

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
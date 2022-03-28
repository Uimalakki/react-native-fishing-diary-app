/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';


const ListItem = ({ species, weight }) => {
  return (
    <View>
      <Text style={styles.item}>{species}, {weight}kg</Text>
    </View>
  );
};

export default ListItem;

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

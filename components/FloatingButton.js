/* eslint-disable prettier/prettier */
import React from "react";
import { FAB } from 'react-native-paper';
import { StyleSheet, Platform } from 'react-native';

const FloatingButton = ({ buttonFunction, icon }) => {

  return (
    <FAB
      style={styles.fab}
      icon={icon}
      onPress={buttonFunction}
    />
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 20,
    ...Platform.select({
      ios: {
        backgroundColor: '#5856d6',
      },
    }),
  },
});

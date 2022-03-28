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
    ...Platform.select({
      android: {
        bottom: 20,
      },
      ios: {
        top: 10,
      },
    }),
  },
});

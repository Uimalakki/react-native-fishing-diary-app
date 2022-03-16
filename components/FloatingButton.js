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
    bottom: 20,
    ...Platform.select({
      android: {
        right: 0,
      },
      ios: {
        right: "50%",
      },
    }),
  },
});

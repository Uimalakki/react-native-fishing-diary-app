/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';

const Notification = ({ setMessage, message }) => {

  const handlePress = () => {
    setMessage(null);
  };

  const setVisiblee = () => {
    if (message) {
        return true;
    }
    return false;
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={setVisiblee()}
      >
        <View style={styles.modalView}>
            <Text>{message}</Text>
          <TouchableOpacity
            onPress={handlePress}
          >
            <Text>Got it</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  secondaryButton: {
    backgroundColor: '#86DAFB',
    padding: 10,
    margin: 15,
    height: 40,
  },
});

export default Notification;

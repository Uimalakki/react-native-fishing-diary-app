import React from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';

const Notification = ({setMessage, message}) => {
  const handlePress = () => {
    setMessage(null);
  };

  const setVisible = () => {
    if (message) {
      return true;
    }
    return false;
  };

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={setVisible()}>
        <View style={styles.modalView}>
          <Text>{message}</Text>
          <TouchableOpacity onPress={handlePress} style={styles.modalButton}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 30,
    marginTop: 200,
    backgroundColor: '#D3F0FE',
    borderRadius: 20,
    borderWidth: 1,
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
  modalButton: {
    backgroundColor: '#86DAFB',
    borderRadius: 10,
    padding: 10,
    margin: 15,
    height: 40,
  },
});

export default Notification;

/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, Modal, StyleSheet, TouchableOpacity } from 'react-native';

const ModalView = ({ modalVisible, setModalVisible, setApiKey }) => {

  const [textFromInput, setTextFromInput] = useState('');

  const handleChange = (event) => {
    setTextFromInput(event);
  };

  const handlePress = () => {
    setApiKey(textFromInput);
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalView}>
          <TextInput
            placeholder="enter openweathermap api-key"
            onChangeText={handleChange}
          />
          <TouchableOpacity
            onPress={handlePress}
          >
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
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

export default ModalView;

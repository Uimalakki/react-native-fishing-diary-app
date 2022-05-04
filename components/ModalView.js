/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, Modal, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const ModalView = ({ modalVisible, setModalVisible, setApiKey }) => {

  const [textFromInput, setTextFromInput] = useState('');

  const handleChange = (event) => {
    setTextFromInput(event);
  };

  const handlePress = () => {
    setApiKey(textFromInput);
    handleClosing();
  };

  const handleClosing = () => {
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
          <Text style={styles.titleText}>Please enter an API-key</Text>
          <Text>Get one from:</Text>
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('https://openweathermap.org/')}
          >
            https://openweathermap.org/
          </Text>
          <TextInput
            style={styles.input}
            placeholder="enter api-key"
            onChangeText={handleChange}
          />
          <TouchableOpacity
            onPress={handlePress}
            style={styles.modalPrimaryButton}
          >
            <Text>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleClosing}
            style={styles.modalSecondaryButton}
          >
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
  modalPrimaryButton: {
    backgroundColor: '#86DAFB',
    borderRadius: 10,
    padding: 10,
    margin: 15,
    height: 40,
  },
  modalSecondaryButton: {
    backgroundColor: '#D3F0FE',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    margin: 15,
    height: 40,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  linkText: {
    textDecorationLine: 'underline',
  },
  input: {
    margin: 15,
    height: 40,
    borderWidth: 1,
  },
});

export default ModalView;

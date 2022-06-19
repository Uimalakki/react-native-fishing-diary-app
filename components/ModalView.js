import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

const ModalView = ({modalVisible, setModalVisible, setApiKey}) => {
  const [textFromInput, setTextFromInput] = useState('');

  const handleChange = event => {
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
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <Text style={styles.titleText}>Please enter an API-key</Text>
          <Text>Get one from:</Text>
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('https://openweathermap.org/')}>
            https://openweathermap.org/
          </Text>
          <TextInput
            style={styles.input}
            placeholder="enter api-key"
            onChangeText={handleChange}
          />
          <View style={styles.buttonArea}>
            <TouchableOpacity
              onPress={handleClosing}
              style={styles.modalSecondaryButton}>
              <Text>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handlePress}
              style={styles.modalPrimaryButton}>
              <Text>Add</Text>
            </TouchableOpacity>
          </View>
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
    width: '30%',
  },
  modalSecondaryButton: {
    backgroundColor: '#D3F0FE',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    margin: 15,
    height: 40,
    width: '30%',
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
    width: '100%',
  },
  buttonArea: {
    flexDirection: 'row',
  },
});

export default ModalView;

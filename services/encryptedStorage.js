import EncryptedStorage from 'react-native-encrypted-storage';

const saveValue = async value => {
  try {
    await EncryptedStorage.setItem('api_key', value);
  } catch (error) {
    console.log(
      'Error with storing a value to encrypted storage' + JSON.stringify(error),
    );
  }
};

const getValue = async () => {
  try {
    const apiKey = await EncryptedStorage.getItem('api_key');
    if (apiKey !== undefined) {
      return apiKey;
    }
    return null;
  } catch (error) {
    console.log(
      'Error with fetching a value from encrypted storage' +
        JSON.stringify(error),
    );
  }
};

export default {saveValue, getValue};

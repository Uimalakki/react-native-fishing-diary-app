/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, { useState, useEffect } from 'react';
import type { Node } from 'react';
import CatchList from './components/CatchList';
import AddForm from './components/AddForm';
import FloatingButton from './components/FloatingButton';
import Notification from './components/Notification';
import { SafeAreaView, StyleSheet, 
         Text, View, ImageBackground } from 'react-native';
import ModalView from './components/ModalView';
import encryptedStorage from './services/encryptedStorage';
import { getAllCatches } from './services/Database.js';
import catchesAxios from './services/catchesAxios';

//const listOfCatches = getAllCatches();
const listOfCatches = catchesAxios.getAll();

const App: () => Node = () => {
  const [changeView, setChangeView] = useState(true);
  const [fishCatches, setFishCatches] = useState(listOfCatches);
  const [buttonIcon, setButtonIcon] = useState('plus');
  const [apiKey, setApiKey] = useState(null);
  const [modalViewVisible, setModalViewVisible] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (apiKey) {
      encryptedStorage.saveValue(apiKey);
      console.log(apiKey);
    }
  }, [apiKey]);

  useEffect(() => {
    console.log(catchesAxios.getAll2());
  }, []);

  const handleView = () => {
    if (changeView) {
      setChangeView(false);
      setButtonIcon('text-box-outline');
    } else {
      setChangeView(true);
      setButtonIcon('plus');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('./assets/images/tausta.jpg')}
        style={styles.backgroundImage}
        blurRadius={5}>
      <Notification  
        setMessage={setMessage}
        message={message}
      />
      {(changeView) 
        ? <CatchList catches={fishCatches} /> 
        : <View>
            <AddForm 
              addCatch={setFishCatches}
              catches={fishCatches}
              apiKey={apiKey}
              setModalViewVisible={setModalViewVisible}
              setMessage={setMessage}
            />
            <ModalView 
              modalVisible={modalViewVisible}
              setModalVisible={setModalViewVisible}
              setApiKey={setApiKey}
            />
          </View>}
      
      <FloatingButton 
        buttonFunction={handleView} 
        icon={buttonIcon}
      />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default App;

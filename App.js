/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, { useState } from 'react';
import type {Node} from 'react';
import CatchList from './components/CatchList';
import AddForm from './components/AddForm';
import FloatingButton from './components/FloatingButton';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';

const listOfCatches = require('./mockdata/catchlist.json');

const App: () => Node = () => {
  const [changeView, setChangeView] = useState(true);
  const [catches, setCatches] = useState(listOfCatches);
  const [buttonIcon, setButtonIcon] = useState('plus');

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
      <Text style={styles.sectionTitle}>Catch app</Text>
      {(changeView) 
        ? <CatchList catches={catches} /> 
        : <AddForm 
            addCatch={setCatches}
            catches={catches} 
          />}
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

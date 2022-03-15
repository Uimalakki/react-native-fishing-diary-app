/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import type {Node} from 'react';
import AddCatchForm from './components/AddCatch';
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

  const handleView = () => {
    if(changeView) {
      setChangeView(false);
    } else {
      setChangeView(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('./tausta.jpg')}
        style={styles.backgroundImage}
        blurRadius={5}>
      <Text style={styles.sectionTitle}>Catch app</Text>
      {(changeView) 
        ? <CatchList catches={catches} /> 
        : <AddForm addCatch={setCatches} />}
      <FloatingButton buttonFunction={handleView} />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default App;

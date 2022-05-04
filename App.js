import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import CatchList from './components/CatchList';
import AddForm from './components/AddForm';
import FloatingButton from './components/FloatingButton';
import Notification from './components/Notification';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import ModalView from './components/ModalView';
import encryptedStorage from './services/encryptedStorage';
import {Appbar} from 'react-native-paper';

const App: () => Node = () => {
  const [changeView, setChangeView] = useState(true);
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
      <Appbar style={styles.AppbarColor}>
        <Appbar.Action
          style={styles.menuRight}
          icon="menu"
          onPress={() => setModalViewVisible(true)}
        />
        <Text style={styles.AppbarHeader}>CatchLog</Text>
      </Appbar>
      <ImageBackground
        source={require('./assets/images/tausta.jpg')}
        style={styles.backgroundImage}
        blurRadius={5}>
        <Notification setMessage={setMessage} message={message} />
        <ModalView
          modalVisible={modalViewVisible}
          setModalVisible={setModalViewVisible}
          setApiKey={setApiKey}
        />
        {changeView ? (
          <CatchList />
        ) : (
          <View>
            <AddForm
              apiKey={apiKey}
              setModalViewVisible={setModalViewVisible}
              setMessage={setMessage}
            />
          </View>
        )}
        <FloatingButton buttonFunction={handleView} icon={buttonIcon} />
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
  menuRight: {
    position: 'absolute',
    right: 0,
  },
  AppbarHeader: {
    color: 'white',
    fontWeight: 'bold',
  },
  AppbarColor: {
    backgroundColor: '#5e639a',
  },
});

export default App;

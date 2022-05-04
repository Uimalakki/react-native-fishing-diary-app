import GetLocation from 'react-native-get-location';

/*
  Use a useState-setter as the parameter of the function
*/
const getCoordinates = setPosition => {
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
    .then(positionObject => {
      const coordinates = {
        latitude: positionObject.latitude,
        longitude: positionObject.longitude,
      };
      console.log('locationservice ' + JSON.stringify(coordinates));
      setPosition(coordinates);
    })
    .catch(error => {
      console.log(error);
    });
};

export default {getCoordinates};

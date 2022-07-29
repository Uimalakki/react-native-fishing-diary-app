import GetLocation from 'react-native-get-location';

/*
  Use an useState-setter as the parameter of the function
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
      setPosition(coordinates);
    })
    .catch(error => {
      const coordinates = {
        latitude: 999,
        longitude: 999,
      };
      setPosition(coordinates);
    });
};

export default {getCoordinates};

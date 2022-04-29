/* eslint-disable prettier/prettier */
import GetLocation from 'react-native-get-location';

const getCoordinates = () => {

 const getCoordinatesPromise = GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
  .then(position => {
    const coordinates = {
      latitude: position.latitude,
      longitude: position.longitude,
    };
    console.log('Device located: ' + JSON.stringify(coordinates));
    return coordinates;
  })
  .catch(error => {
    console.warn(error);
    const coordinates = {
      latitude: 'n/a',
      longitude: 'n/a',
    };
    return coordinates;
  });

  const coordinatesFromPromise = getCoordinatesPromise.then(object => {
      return object;
  });

  coordinatesFromPromise();
};

/*
  Use a useState-setter as the parameter of the function
*/
const testCoord = (setPosition) => {
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

export default { getCoordinates, testCoord };

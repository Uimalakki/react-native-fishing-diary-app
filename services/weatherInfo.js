import axios from 'axios';
import encryptedStorage from './encryptedStorage';

const getCurrentWeather = async (latitude, longitude) => {
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const apiKey = await encryptedStorage.getValue();

  const request = axios.get(
    baseUrl + `?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`,
  );
  console.log('axios ' + request.then(response => response.data));
  return request.then(response => response.data);
};

export default {
  getCurrentWeather,
};

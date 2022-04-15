/* eslint-disable prettier/prettier */
import axios from 'axios';
import encryptedStorage from './encryptedStorage';

const getWeatherInfoByLatAndLon = async (lat, lon) => {

  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const apiKey = await encryptedStorage.getValue();

  const request = axios
  .get(baseUrl + `?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)

 // const apiKey = '0fc2c86230d0ae99918cd51167a8ec1d';
/*
  try {
    console.log('weatherinfo.get try start ' + JSON.stringify(apiKey));
    const request = axios
      .get(baseUrl + `?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
      .then(response => {
        console.log('weatherinfo.get response ' + JSON.stringify(response.data));
        return response.data;
      });
    return request;
  }
  catch (exception) {
    console.log('something went wrong with connecting to weather api: ' + exception);
    return [];
  }*/
};

const getCurrentWeather = async (latitude, longitude) => {

  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const apiKey = await encryptedStorage.getValue();

  const request = axios
    .get(baseUrl + `?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);

  return request.then(response => response.data);
};

export default {
  getWeatherInfoByLatAndLon, getCurrentWeather,
};

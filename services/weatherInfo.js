/* eslint-disable prettier/prettier */
import axios from 'axios';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'nänänänän';

const getWeatherInfoByLatLon = ({lat, lon}) => {
  const request = axios.get(baseUrl + `?lat=${lat}&lon=${lon}&appid=${apiKey}`);
  return request.then(response => response.data)
};

export default {
  getWeatherInfoByLatLon,
}
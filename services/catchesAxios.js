/* eslint-disable prettier/prettier */
import axios from 'axios';
const baseUrl = 'https://stormy-escarpment-48173.herokuapp.com/api/catches';

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
};

const getAll2 = () => {
    axios.get(baseUrl).then(res => {
        return res.data;
    });
};

export default { getAll, getAll2 };

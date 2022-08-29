import axios from 'axios';
import { retrieveData } from '../../services/asyncStorage';

var instance = axios.create({
  baseURL: 'https://api-temp.mazadee.com/v1/',
  timeout: 120000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

instance.interceptors.request.use(
  async config => {
    var access_token = await retrieveData('access_token');
    config.headers.Authorization = 'Bearer '+access_token;
    return config;
  },
  request => request,
  error => new Error(error),
);

// Response interceptor
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return error;
  },
);

export default instance;

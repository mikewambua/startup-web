import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://startup-freeweb.herokuapp.com',
  // baseURL:"http://localhost:5000"
});

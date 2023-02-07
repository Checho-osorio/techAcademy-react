import axios from 'axios';

const api = axios.create({
  baseURL: 'https://63badf1d32d17a50907ff06b.mockapi.io/',
});

export default api;

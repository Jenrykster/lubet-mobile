import axios from 'axios';
import { store } from '@store';

const api = axios.create({
  baseURL: 'http://10.0.0.105:3333',
  headers: {
    'Content-Type': 'application/json',
  },
});

store.subscribe(() => {
  const token = store.getState().user.token;
  if (token) {
    api.interceptors.request.use(
      (config) => {
        config.headers = {
          Authorization: `Bearer ${token}`,
        };
        return config;
      },
      (error) => {
        console.log(error);
        return error;
      }
    );
  }
});

api.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      console.log(response);
    }
    return response;
  },
  (error) => {
    console.log(error);
    return error;
  }
);
export default api;

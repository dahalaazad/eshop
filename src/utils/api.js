import axios from 'axios';

export const emistiriAPI = axios.create({
  baseURL: 'https://7433-103-41-172-114.in.ngrok.io/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function setupInterceptor(store) {
  emistiriAPI.interceptors.request.use(
    config => {
      config.headers.Authorization = store.getState().auth.userToken || '';
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );
}

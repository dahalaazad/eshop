import axios from 'axios';

const baseURL = 'https://7433-103-41-172-114.in.ngrok.io/';

export const emistiriAPI = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const emistiriPhotoAPI = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'multipart/form-data',
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

  emistiriPhotoAPI.interceptors.request.use(
    config => {
      config.headers.Authorization = store.getState().auth.userToken || '';
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );
}

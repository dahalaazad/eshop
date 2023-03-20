import {
  setLoggedIn,
  setToken,
  setUserInfo,
} from '@app/redux/slices/auth/authSlice';
import axios from 'axios';
import {showToast} from './showToast';

const baseURL = 'https://c588-103-41-172-114.in.ngrok.io/';

export const emistiriAPI = axios.create({
  baseURL: baseURL,
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

  emistiriAPI.interceptors.response.use(
    response => response,
    error => {
      switch (error?.response?.status) {
        case 401:
          store.dispatch(setLoggedIn(false));
          store.dispatch(setUserInfo({}));
          store.dispatch(setToken(null));
          showToast(
            'error',
            'Warning',
            error?.response?.data?.data
              ? 'Session expired'
              : error?.response?.data,
          );
          break;
        case 404:
          showToast('error', 'Warning', 'Please connect to a network');
          break;
        case 422:
          showToast('error', 'Warning', 'Please check your input format');
          break;
        case 500:
          store.dispatch(setLoggedIn(false));
          store.dispatch(setUserInfo({}));
          store.dispatch(setToken(null));
          showToast('error', 'Warning', 'Oops! Something went wrong.');
          break;
        default:
          showToast('error', 'Warning', 'Oops! Something went wrong.');
      }

      return Promise.reject(error);
    },
  );
}

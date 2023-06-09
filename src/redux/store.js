import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {authReducer, productReducer} from './slices';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const createDebugger = require('redux-flipper').default;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['firstLoad', 'isLoggedIn', 'userToken', 'userInfo'],
};

const rootReducer = combineReducers({
  product: productReducer,
  auth: persistReducer(persistConfig, authReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(createDebugger()),
});

export const persistor = persistStore(store);

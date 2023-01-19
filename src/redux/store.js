import {configureStore} from '@reduxjs/toolkit';
import {productReducer} from './slices';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['productList'],
};

const persistedReducer = persistReducer(persistConfig, productReducer);

export const store = configureStore({
  reducer: {
    product: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

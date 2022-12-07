import {configureStore} from '@reduxjs/toolkit';
import {productReducer} from './slices/displayProducts';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

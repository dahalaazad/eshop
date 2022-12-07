import {configureStore} from '@reduxjs/toolkit';
import {productReducer} from './slices';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

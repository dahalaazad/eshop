import {createSlice} from '@reduxjs/toolkit';
import {ProductCardData} from '@app/constants';
import {AllProductList} from '@app/constants';

const initialState = AllProductList;

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      return {...state, name: action.payload};
    },
  },
});

export const {setProduct} = productSlice.actions;

export default productSlice.reducer;

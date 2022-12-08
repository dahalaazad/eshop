import {createSlice} from '@reduxjs/toolkit';
import {ProductCardData} from '@app/constants';
import {AllProductList} from '@app/constants';

const initialState = {
  productList: [],
  currentProduct: {},
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      return {...state, productList: action.payload};
    },
    setCurrentProduct: (state, action) => {
      return {...state,currentProduct: action.payload};
    },
  },
});

export const {setProduct, setCurrentProduct} = productSlice.actions;

export default productSlice.reducer;

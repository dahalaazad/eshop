import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {emistiriAPI} from '@app/utils/api';
import mapKeys from 'lodash.mapkeys';
import toCamelCase from 'lodash.camelcase';

const initialState = {
  productList: [],
  currentProduct: {},
  productListLoading: false,
  productListError: null,
};

const baseURL = 'https://c588-103-41-172-114.in.ngrok.io';

export const getProductList = createAsyncThunk(
  'product/getProductList',
  async (_, {rejectWithValue}) => {
    try {
      const productListResponse = await emistiriAPI.get('api/v1/products');
      return productListResponse;
    } catch (error) {
      // return custom error message from backend if present
      return rejectWithValue(error);
    }
  },
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      return {...state, productList: action.payload};
    },
    setCurrentProduct: (state, action) => {
      return {...state, currentProduct: action.payload};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProductList.pending, state => {
        state.productListLoading = true;
        state.productListError = null;
      })
      .addCase(getProductList.fulfilled, (state, {payload}) => {
        state.productListLoading = false;
        const tempProductList = payload.data.map(item =>
          mapKeys(item, (value, key) => toCamelCase(key) || {}),
        );

        state.productList = tempProductList.map(item =>
          Object.assign({}, item, {
            imagePath: item.imagePath.replace(
              'http://localhost:3000',
              `${baseURL}`,
            ),
          }),
        );
      })
      .addCase(getProductList.rejected, (state, {payload}) => {
        state.productListLoading = false;
        state.productListError = payload;
      });
  },
});

export const {setProduct, setCurrentProduct} = productSlice.actions;

export default productSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {showToast} from '@app/utils/showToast';
import axios from 'axios';
import mapKeys from 'lodash.mapkeys';
import toCamelCase from 'lodash.camelcase';

const initialState = {
  firstLoad: true,
  isLoggedIn: false,
  loading: false,
  userToken: null,
  error: null,
  success: false,
  userInfo: {},
};

const baseURL = 'https://0a75-103-41-172-114.in.ngrok.io';

export const authUser = createAsyncThunk(
  'auth/authUser',
  async (userInfoContainer, {dispatch, rejectWithValue}) => {
    try {
      const authResponse = await axios.post(
        `${baseURL}/${userInfoContainer?.loginURL}`,
        userInfoContainer?.userDetails,
      );
      dispatch(setToken(authResponse?.headers?.authorization || null));
      return authResponse;
    } catch (error) {
      // return custom error message from backend if present
      if (error?.response && error?.response?.data) {
        return rejectWithValue(error);
      } else {
        return rejectWithValue(error.response);
      }
    }
  },
);

export const signOutUser = createAsyncThunk(
  'auth/signOutUser',
  async (_, {getState, dispatch, rejectWithValue}) => {
    try {
      const state = getState();

      const token = state?.auth?.userToken;

      const signOutResponse = await axios.delete(
        `${baseURL}/customers/sign_out`,
        {
          headers: {
            authorization: token,
          },
        },
      );
      dispatch(setLoggedIn(false));
      return signOutResponse;
    } catch (error) {
      // return custom error message from backend if present
      if (error?.response && error?.response?.data?.message) {
        showToast('error', 'Error', `${error?.response?.data?.message}`);
        return rejectWithValue(error);
      } else {
        showToast('error', 'Error', 'Oops! Something went wrong.');
        return rejectWithValue(error.response);
      }
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setFirstLoad: (state, action) => {
      return {...state, firstLoad: action.payload};
    },
    setLoggedIn: (state, action) => {
      return {...state, isLoggedIn: action.payload};
    },
    setToken: (state, action) => {
      return {...state, userToken: action.payload};
    },
  },
  extraReducers: builder => {
    // register user
    builder
      .addCase(authUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authUser.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.success = true; // registration successful
        state.firstLoad = false;
        state.isLoggedIn = true;
        state.userInfo = mapKeys(
          payload?.data?.status?.data,
          (value, key) => toCamelCase(key) || {},
        );
      })
      .addCase(authUser.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(signOutUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signOutUser.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.userInfo = {};
        state.userToken = null;
      })
      .addCase(signOutUser.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const {setFirstLoad, setLoggedIn, setToken} = authSlice.actions;

export default authSlice.reducer;

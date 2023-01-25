import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  firstLoad: true,
  isLoggedIn: false,
  loading: false,
  // userInfo: null,
  userToken: null,
  error: null,
  success: false,
  userInfo: {},
};

const baseURL = 'https://cdcf-103-41-172-114.in.ngrok.io';

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (userSignUpInfo, {dispatch, rejectWithValue}) => {
    try {
      const signUpResponse = await axios.post(
        `${baseURL}/customers`,
        userSignUpInfo,
      );
      dispatch(setToken(signUpResponse?.headers?.authorization));
      return signUpResponse;
    } catch (error) {
      // return custom error message from backend if present
      if (error?.response && error?.response?.data?.message) {
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
        return rejectWithValue(error);
      } else {
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
      .addCase(signupUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.success = true; // registration successful
        state.firstLoad = false;
        state.isLoggedIn = true;
        state.userInfo = payload?.data?.status?.data;
      })
      .addCase(signupUser.rejected, (state, {payload}) => {
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

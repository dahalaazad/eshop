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

const baseURL = 'https://1677-103-41-172-114.in.ngrok.io';

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (userSignUpInfo, {rejectWithValue}) => {
    try {
      const signUpResponse = await axios.post(
        `${baseURL}/customers`,
        userSignUpInfo,
      );
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
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setFirstLoad: (state, action) => {
      return {...state, firstLoad: action.payload};
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
        // console.log(payload);
        state.loading = false;
        state.success = true; // registration successful
        state.firstLoad = false;
        state.isLoggedIn = true;
        state.userInfo = payload?.data?.status?.data;
      })
      .addCase(signupUser.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const {setFirstLoad} = authSlice.actions;

export default authSlice.reducer;

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

export const editProfile = createAsyncThunk(
  'auth/editProfile',
  async (editInfoContainer, {getState, dispatch, rejectWithValue}) => {
    try {
      const state = getState();

      const userID = state?.auth?.userInfo?.id;
      // console.log(userID);
      const token = state?.auth?.userToken;
      console.log(editInfoContainer?.profilePic);

      const editProfileResponse = await axios.patch(
        `${baseURL}/api/v1/customers/${userID}`,
        editInfoContainer?.userDetails,
        {
          headers: {
            'Content-Type': 'application/json',
            authorization: token,
          },
        },
      );
      // console.log(editProfileResponse);

      const editProfilePicResponse = await axios.post(
        `${baseURL}/api/v1/customers/attach_picture`,
        editInfoContainer?.profilePic,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            authorization: token,
          },
        },
      );
      console.log(editProfilePicResponse);

      const editResponse = {
        userData: editProfileResponse,
        userProfilePic: editProfilePicResponse,
      };

      return editResponse;
    } catch (error) {
      console.log(error);
      // return custom error message from backend if present
      if (error?.response && error?.response?.data?.message) {
        // console.log(error);
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
    setUserInfo: (state, action) => {
      return {...state, userInfo: action.payload};
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
      })
      .addCase(editProfile.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editProfile.fulfilled, (state, {payload}) => {
        state.loading = false;
        console.log(payload);
        state.userInfo = mapKeys(
          payload?.userData?.data,
          (value, key) => toCamelCase(key) || {},
        );
        state.userInfo.displayPicturePath =
          payload?.userData?.data?.display_picture_path.replace(
            'http://localhost:3000',
            `${baseURL}`,
          );
      })
      .addCase(editProfile.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
        state.isLoggedIn = false;
      });
  },
});

export const {setFirstLoad, setLoggedIn, setToken, setUserInfo} =
  authSlice.actions;

export default authSlice.reducer;

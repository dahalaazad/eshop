import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {showToast} from '@app/utils/showToast';
import mapKeys from 'lodash.mapkeys';
import toCamelCase from 'lodash.camelcase';
import {emistiriAPI} from '@app/utils/api';

const initialState = {
  firstLoad: true,
  isLoggedIn: false,
  loading: false,
  userToken: null,
  error: null,
  userInfo: {},
};

const baseURL = 'https://7433-103-41-172-114.in.ngrok.io';

export const authUser = createAsyncThunk(
  'auth/authUser',
  async (userInfoContainer, {dispatch, rejectWithValue}) => {
    try {
      const authResponse = await emistiriAPI.post(
        `${userInfoContainer?.loginURL}`,
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
      const signOutResponse = await emistiriAPI.delete('customers/sign_out');
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

      const editProfileResponse = await emistiriAPI.patch(
        `api/v1/customers/${userID}`,
        editInfoContainer?.userDetails,
      );

      if (editInfoContainer?.profilePic?._parts[0][1]?.uri) {
        const editProfilePicResponse = await emistiriAPI.post(
          'api/v1/customers/attach_picture',
          editInfoContainer?.profilePic,
        );
        const editResponse = {
          userData: editProfileResponse,
          userProfilePic: editProfilePicResponse,
        };
        return editResponse;
      } else {
        const editResponse = {
          userData: editProfileResponse,
        };

        return editResponse;
      }
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

        state.userInfo = mapKeys(
          payload?.userData?.data,
          (value, key) => toCamelCase(key) || {},
        );
        state.userInfo.displayPicturePath = payload?.userProfilePic
          ? payload?.userProfilePic?.data?.display_picture_path.replace(
              'http://localhost:3000',
              `${baseURL}`,
            )
          : state.userInfo.displayPicturePath.replace(
              'http://localhost:3000',
              `${baseURL}`,
            );
      })
      .addCase(editProfile.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const {setFirstLoad, setLoggedIn, setToken, setUserInfo} =
  authSlice.actions;

export default authSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';
import {loginRequest, logoutRequest} from './auth.action';

const INITIAL_STATE = {
  isLoading: false,
  isLoggedIn: false,
  isDogBreeder: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    reset: state => {
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    dogBreeder: (state, action) => {
      state.isDogBreeder = action?.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginRequest.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.isLoggedIn = true;
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(logoutRequest.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logoutRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.isDogBreeder = false;
      })
      .addCase(logoutRequest.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const {reset, dogBreeder} = authSlice.actions;

export default authSlice.reducer;

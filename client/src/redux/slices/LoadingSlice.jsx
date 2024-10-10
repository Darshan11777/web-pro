// src/store/loadingSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadingCount: 5, // Tracks the number of ongoing requests
  isLoading: true, // Overall loading state
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading: (state) => {
    //   state.loadingCount += 1;
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.loadingCount -= 1;
      console.log( "state.loadingCount",state.loadingCount);
      if (state.loadingCount <= 0) {
        state.isLoading = false;
        state.loadingCount = 0; // Ensure it never goes negative
      }
    },
  },
});

export const { startLoading, stopLoading } = loadingSlice.actions;

export default loadingSlice.reducer;

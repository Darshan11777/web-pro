// src/store/cookieSlice.js
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const cookieSlice = createSlice({
  name: 'cookie',
  initialState: {
    token: Cookies.get('admin') || null, // Initialize with cookie value
    isLoggedIn: !!Cookies.get('admin'),  // Set login status based on cookie existence
  },
  reducers: {
    setCookie: (state, action) => {
      state.token = action.payload; // Update state with new cookie value
      state.isLoggedIn = true; // Update login status
      Cookies.set('admin', action.payload); // Set cookie in browser
    },
    removeCookie: (state) => {
      state.token = null; // Clear token from state
      state.isLoggedIn = false; // Update login status
      Cookies.remove('admin'); // Remove cookie from browser
    },
    checkCookie: (state) => {
      const token = Cookies.get('admin');
      console.log( "token",token);
      state.token = token || null;
      state.isLoggedIn = !!token; // Update login status based on cookie existence
    },
  },
});

// Export actions and reducer
export const { setCookie, removeCookie, checkCookie } = cookieSlice.actions;
export default cookieSlice.reducer;

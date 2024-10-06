import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

// Create an async thunk to fetch user data
export const fetchUsers = createAsyncThunk('users/fetchUsers', async() => {
  // console.log("res:",response)
  const navigate=useNavigate()
  try {
    const baseUrl = import.meta.env.VITE_API_BASE_URL; // Assuming you have this defined
    const response = await axios.get(baseUrl + 'admin/user-data',{
      withCredentials: true, // Allows cookies to be sent with the request
    }); // Replace 'users' with your actual API endpoint

    console.log("res:",response)
    return response.data;
  } catch (error) {
    // Handle errors appropriately
    // navigate('/admin/auth/signin')
console.log('error in ytttt data',error)
    // throw error; 
  }
});
const initialState = {
  users: [], // Initially, no users are loaded
  loading: false, // Indicates whether data is being fetched
  error: null, // Stores any error messages during fetching
};

// Create the slice
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // You can add other reducers here if needed, like addUser, deleteUser, etc.
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

// Export the reducer
export default userSlice.reducer;

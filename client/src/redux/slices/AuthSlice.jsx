import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Backend URL
const API_URL =import.meta.env.VITE_API_BASE_URL; // Change this to your backend URL

// Async thunk for login
export const login = createAsyncThunk('admin/login', async (credentials, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${API_URL}/admin/login`, credentials, {
            withCredentials: true, // Required to send cookies
        });
        
        return response.data; // This will contain user data and token
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Async thunk for checking authentication status
export const checkAuth = createAsyncThunk('auth/checkAuth', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${API_URL}admin/check-auth`, {
            withCredentials: true, // Ensure cookies are sent
        });
        console.log( "response.data",response.data);
        return response.data; // Contains authenticated status or user info
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Async thunk for logout
export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${API_URL}admin/logout`, {
            withCredentials: true, // Ensure cookies are sent
        });
        return response.data; // Logout success message
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        status: 'idle',
        error: null,
    },
    reducers: {
        // You can add additional reducers here if needed
    },
    extraReducers: (builder) => {
        // Login action
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.isAuthenticated = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            // Check authentication status
            .addCase(checkAuth.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isAuthenticated = true;
                state.status = 'succeeded';
            })
            .addCase(checkAuth.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.user = null;
                state.status = 'failed';
            })
            // Logout action
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.isAuthenticated = false;
            });
    },
});

export default authSlice.reducer;


// npm install @reduxjs/toolkit react-redux

// 1.create Redux folder in src 
// 2.create slices folder in redux
// 3.in slices Slice.jsx
// 3.create Store.jsx in redux
import {configureStore} from '@reduxjs/toolkit';
import UserDataSlice from './slices/UserDataSlice';
import cookieReducer from './slices/CookieSlice'
import  loadingReducer from './slices/LoadingSlice'
import AuthSlice from './slices/AuthSlice'
import WebDataSlice from './slices/WebProDataSlice'
// import counterReducer from "./slices/Slice";
export const store=configureStore({
    // reducer:{count:counterReducer},
    reducer:{"user-data":UserDataSlice,"cookie": cookieReducer,"auth":AuthSlice, loading: loadingReducer,data:WebDataSlice},
    devTools:true,
})
 
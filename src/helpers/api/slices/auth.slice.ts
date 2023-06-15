import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../actions/auth.action';

const initialState = {
    loading: false,
    userInfo: {},
    userToken: null,
    error: false ,
    success: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, action) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.userToken = action.payload.jwt;
            state.userInfo = action.payload.user;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
        })
    },
  })
  
  export default authSlice.reducer
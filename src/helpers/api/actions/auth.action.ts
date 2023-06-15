import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserLogin } from '../../interfaces/User.interface';

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }: UserLogin, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      let response = await axios.post(
        `${process.env.REACT_APP_STRAPI}/api/auth/local`,
        { "identifier": email, password },
        config
      );
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
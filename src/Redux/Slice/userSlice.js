import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import BASE_URL from '../../Config/apii';

export const mobileLogin = createAsyncThunk(
  'Useraccount/mobileLogin',
 async (body, { rejectWithValue }) => {
    try {
    
      const response = await fetch(`${BASE_URL}auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error('Failed to send OTP');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const sendOtp = createAsyncThunk(
  'user/sendOtp',
  async (body, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}Useraccount/sendotp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Failed to send OTP');
      }

      const data = await response.json();
      return {
        mobile: body.number,
        otp: body.otp,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [],
    otp:"1111",
    mobile:"",
    isLoading: false,
    error: null,
    UserId:"",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(mobileLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
     
     ;
  },
});


export default userSlice.reducer;
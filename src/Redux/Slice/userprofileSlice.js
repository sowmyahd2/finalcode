import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://3.109.102.154/reactapi/index.php/';

export const fetchuserdefaultaddress = createAsyncThunk('user/address/', async ({ userid }, { dispatch }) => {
  try {
    const response1 = await fetch(`${BASE_URL}Useraccount/getdefaultuseraddress/${userid}`);
    const json1 = await response1.json();

    return json1;
  } catch (error) {
    // Handle error
    throw error;
  }
});

export const updateaccountdetail = createAsyncThunk(
  'user/updateprofile',
  async (body, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}Useraccount/updateuserdetails`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });

      if (!response.ok) {
        throw new Error('Failed to update data');
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
export const updatepassword = createAsyncThunk(
  'user/updatepassword',
  async (body, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}Useraccount/updateuserpassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });

      if (!response.ok) {
        throw new Error('Failed to update data');
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

const userprofileSlice = createSlice({
  name: 'userprofile',
  initialState: {
    userdefaultaddress:"",

    isLoading: false,
    error: null,
    UserId:"",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchuserdefaultaddress.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchuserdefaultaddress.fulfilled, (state, action) => {
        state.user = action.payload;
        state.UserId=action.payload.data.UserId;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchuserdefaultaddress.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

},
});

export default userprofileSlice.reducer;
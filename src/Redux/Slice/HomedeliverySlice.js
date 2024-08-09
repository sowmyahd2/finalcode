import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Alert } from 'react-native';
const BASE_URL = 'http://3.109.102.154/reactapi/index.php/'; // Your API base URL

// Async thunk for fetching data
export const fetchhomeorders = createAsyncThunk('home/orders/', async ({userid, selectedCity }, { dispatch }) => {
  try {

    const response1 = await fetch(`${BASE_URL}Useraccount/homeorders/${userid}/${selectedCity}`);
    const json1 = await response1.json();

    return json1;
  } catch (error) {
    // Handle error
    throw error;
  }
});


const homedeliveryorderSlice = createSlice({
  name: 'homeorder',
  initialState: { homeorders: [], isLoading: false, error: null },
  reducers: {


      },

    extraReducers: (builder) => {
      builder.addCase(fetchhomeorders.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(fetchhomeorders.fulfilled, (state, action) => {
        state.homeorders = action.payload.data;
        state.isLoading = false;
        state.error = null;
      });
      builder.addCase(fetchhomeorders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
    },

  });
  export const { sethomeOrders } = homedeliveryorderSlice.actions;
export default homedeliveryorderSlice.reducer;

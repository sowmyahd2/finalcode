import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Alert } from 'react-native';
const BASE_URL = 'http://3.109.102.154/reactapi/index.php/'; // Your API base URL

// Async thunk for fetching data
export const addtowishlist = createAsyncThunk('wishlist/products/', async ({userid,pid, selectedCity }, { dispatch }) => {
  try {

    const response1 = await fetch(`${BASE_URL}Useraccount/addtowishlist/${pid}/${userid}/${selectedCity}`);
    const json1 = await response1.json();

    return json1;
  } catch (error) {
    // Handle error
    throw error;
  }
});
export const fetchwishlist = createAsyncThunk('wishlist/products/', async ({userid, selectedCity }, { dispatch }) => {
  try {

    const response1 = await fetch(`${BASE_URL}Useraccount/mywishlist/${userid}/${selectedCity}`);
    const json1 = await response1.json();

    return json1;
  } catch (error) {
    // Handle error
    throw error;
  }
});
export const deletewishproduct = createAsyncThunk('wishlist/products/', async ({productid, selectedCity }, { dispatch }) => {
  try {

    const response1 = await fetch(`${BASE_URL}Useraccount/deletewishproduct/${productid}/${selectedCity}`);
    const json1 = await response1.json();

    return json1;
  } catch (error) {
    // Handle error
    throw error;
  }
});
// Create the API using createApi

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: { wishlist: [], isLoading: false, error: null },
  reducers: {
    setwishlist: (state, action) => {
      state.wishlist = action.payload.data;
      state.isLoading = false;
      state.error = null;

      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchwishlist.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(fetchwishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload.data;
        state.isLoading = false;
        state.error = null;
      });
      builder.addCase(fetchwishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
    },

  });
  export const { setwishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

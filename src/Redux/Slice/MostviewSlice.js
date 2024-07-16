import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import  BASE_URL  from '../../Config/apii';

export const fetchMostViewedProducts = createAsyncThunk(
  'products/fetchMostViewedproducts',
  async ({ selectedCity }) => {
    try {
      
      const city=selectedCity;
      const response = await fetch(`${BASE_URL}products/mostview/${city}`);
    
   
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.error('Error fetching departments:', error);
    throw error;
    }
  }
);

export const fetchMostViewedstores = createAsyncThunk(
  'stores/fetchMostViewed',
  async ({ selectedCity }) => {
    try {
      const city=selectedCity;
      const pincode="570009";
     
      const response = await fetch(`${BASE_URL}stores/mostview/${city}/${pincode}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
      return data;
    } catch (error) {
      
    }
  }
);

const mostViewedSlice = createSlice({
  name: 'mostViewed',
  initialState: { mostviewedproducts: [], mostviewedstores: [], isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMostViewedProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMostViewedProducts.fulfilled, (state, action) => {
     
        state.mostviewedproducts = action.payload.data;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchMostViewedProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchMostViewedstores.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMostViewedstores.fulfilled, (state, action) => {
        state.mostviewedstores = action.payload.data;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchMostViewedstores.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default mostViewedSlice.reducer;

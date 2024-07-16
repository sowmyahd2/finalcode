import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  BASE_URL  from '../../Config/apii';
export const getSearch = createAsyncThunk('search/getSearch', async ({ selectedCity, term }) => {
    try {
      const body = JSON.stringify({
        city: selectedCity,
        term,
        departmentId: "All"
      });

      const response = await fetch(`${BASE_URL}search/autocomplete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const json = await response.json();
      
      return json;
    } catch (error) {
      console.error('Error fetching departments:', error);
      throw error;
    }
  });

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchstores: [],
    searchbrands: [],
    searchcategory: [],
    loading: false,
  },
  reducers: {
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearch.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSearch.fulfilled, (state, action) => {

        state.loading = false;
        state.searchstores = action.payload.data.stores;
        state.searchbrands = action.payload.data.brands;
        state.searchcategory=action.payload.data.category
      })
      .addCase(getSearch.rejected, (state) => {
        state.loading = false;
        // Handle the error state if needed
      });
  },
});

export default searchSlice.reducer;
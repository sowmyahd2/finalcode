import Api from "../../Config/Api";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Create async thunk for fetching most viewed products
export const fetchMostViewedProducts = createAsyncThunk('products/fetchMostViewed', async ({ selectedCity }, { rejectWithValue }) => {
  try {
    const response = await fetch(`${Api}Products/mostView/${selectedCity}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Create slice
const mostViewedSlice = createSlice({
  name: 'mostViewed',
  initialState: { data: [], isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMostViewedProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMostViewedProducts.fulfilled, (state, action) => {
        state.data = action.payload.data; // Assuming your API response structure
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchMostViewedProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // The rejectedWithValue will provide this
      });
  },
});

export default mostViewedSlice.reducer;

import Api from "../../Config/Api";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fetchCity = createAsyncThunk('city/getPopularCity', async (dispatch) => {
  try {
    const response = await fetch(`${Api}/city`);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    // Handle error
    throw error;
  }
});

export const cityApi = createApi({
  reducerPath: 'city',
  baseQuery: fetchBaseQuery({ baseUrl: Api }),
  endpoints: (builder) => ({
    getPopularCity: builder.query({
      query: () => 'Useraccount/getpopularcity/',
    }),
  }),
});

const citySlice = createSlice({
  name: 'city',
  initialState: {
    selectedCity: 'mysuru',
    cityList: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setCity: (state, action) => {
      state.selectedCity = action.payload;
    },
    setCityList: (state, action) => {
      state.cityList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCity.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCity.fulfilled, (state, action) => {
        state.cityList = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCity.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCity, setCityList } = citySlice.actions;
export default citySlice.reducer;   
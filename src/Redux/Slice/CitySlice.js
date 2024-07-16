import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import  BASE_URL  from '../../Config/apii';
export const fetchcity = createAsyncThunk('city/fetchcity', async () => {
  try {

    const response = await fetch(`${BASE_URL}city`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error('Error fetching departments:', error);
    throw error;
  }
});
export const setCityname = createAsyncThunk('city/setCity', async ({city,pincode}) => {
  try {
  
    const response = await fetch(`${BASE_URL}getcityname/${city}/${pincode}`);
    const json = await response.json();
    localStorage.setItem('selectedCity', json.data.CityName.toLowerCase());
    localStorage.setItem('selectedpincode', json.data.Pincode);
    return {
      city:(json.data.CityName).toLowerCase(),
      pincode:json.data.Pincode
    };
  } catch (error) {
    // Handle error
    throw error;
  }
});
export const citySlice = createSlice({
  name: 'city',
  initialState: {
    isLoading: false,
    isError: false,
    cityList: [],
    selectedCity: localStorage.getItem('selectedCity') || '',
    selectedpincode:"",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchcity.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchcity.fulfilled, (state, action) => {
  
        state.cityList = action.payload.data;
        state.isLoading = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(setCityname.fulfilled, (state, action) => {
        state.selectedCity = action.payload.city;
        state.selectedpincode = action.payload.pincode;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchcity.rejected, (state, action) => {
        
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default citySlice.reducer;

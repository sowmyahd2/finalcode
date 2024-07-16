import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import  BASE_URL  from '../../Config/apii';

export const getBrowseByMainCategory = createAsyncThunk(
  'category/browsebycategory',
  async ({ selectedcity,id }) => {
    try {
      
      
      const response = await fetch(`${BASE_URL}maincategory/browseby/${id}/${selectedcity}`);
    
   
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("branddata",response.data)
      return data;
    } catch (error) {
      console.error('Error fetching departments:', error);
    throw error;
    }
  }
);

export const getCategory = createAsyncThunk(
  'category/catsubcategory',
  async ({ selectedcity,id }) => {
    try {
      
      
      const response = await fetch(`${BASE_URL}Category/subcategory/${id}/${selectedcity}`);
    
   
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("branddata",response.data)
      return data;
    } catch (error) {
      console.error('Error fetching departments:', error);
    throw error;
    }
  }
);




const categorySlice = createSlice({
  name: 'brand',
  initialState: {
     browsebycatstores: [],
     browsebycatbrands: [],
     catsubcategory:[],
     catbrands:[],
     catstorebrands:[],
 
     
       isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBrowseByMainCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBrowseByMainCategory.fulfilled, (state, action) => {
     
        state.browsebycatstores = action.payload.data.store;
        state.browsebycatbrands = action.payload.data.brand;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getBrowseByMainCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        
           state.catsubcategory = action.payload.data.category;
           state.catbrands = action.payload.data.brands;
           state.catstorebrands = action.payload.data.localBrands;
           state.isLoading = false;
           state.error = null;
         });
      
  },
});

export default categorySlice.reducer;

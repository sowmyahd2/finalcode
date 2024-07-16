import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import  BASE_URL  from '../../Config/apii';

export const getbrandoffer = createAsyncThunk(
  'brand/offers',
  async ({ selectedcity,id }) => {
    try {
      
      
      const response = await fetch(`${BASE_URL}brands/offers/${selectedcity}/${id}`);
    
   
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

export const getbrandofferdetail = createAsyncThunk(
  'brand/offersdetail',
  async ({ selectedcity,dpartid,brandid }) => {
    try {
      
      
      const response = await fetch(`${BASE_URL}brands/offers/products/${selectedcity}/${dpartid}/${brandid}`);
    
   
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

export const getBrandCategory = createAsyncThunk(
  'brand/getBrandCategory',
  async ({ selectedcity,brandid }) => {
    try {
      
      
      const response = await fetch(`${BASE_URL}products/brandcategory/${selectedcity}/${brandid}`);
    
   
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
export const getbrowseByBrandCategory = createAsyncThunk(
  'brand/getbrowseByBrandCategory',
  async ({ selectedcity,brandid,dpid}) => {
    try {
      
      
      const response = await fetch(`${BASE_URL}brands/categoryBrowseby/${brandid}/${dpid}/${selectedcity}`);
    
   
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
export const getBrandSubCategory = createAsyncThunk(
  'brand/getBrandSubCategory',
  async ({ selectedcity,brandid,dpid}) => {
    try {
      
      
      const response = await fetch(`${BASE_URL}brands/subcategory/${selectedcity}/${dpid}/${brandid}`);
    
   
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
const brandSlice = createSlice({
  name: 'brand',
  initialState: {
     branddeals: [],
     brandofferproducts:[],
     brandCategoryProducts:[],
     brandCategoryFilter:[],
     browserbysubcategorybrandstore:[],
     browserbysubcategorybrand:[],
     brandsubcategoryproducts:[],
     brandsubcategoryfilters:[],
       isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getbrandoffer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getbrandoffer.fulfilled, (state, action) => {
     console.log(action.payload.data);
        state.branddeals = action.payload.data;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getBrandCategory.fulfilled, (state, action) => {
        
           state.brandCategoryProducts = action.payload.data.products;
           state.brandCategoryFilter = action.payload.data.filter;
        
           state.isLoading = false;
           state.error = null;
         })
         .addCase(getBrandSubCategory.fulfilled, (state, action) => {
        
          state.brandsubcategoryproducts = action.payload.data.products;
          state.brandsubcategoryfilters = action.payload.data.filters;
        
       
          state.isLoading = false;
          state.error = null;
        })
         
         .addCase(getbrowseByBrandCategory.fulfilled, (state, action) => {
        
          state.browserbysubcategorybrandstore = action.payload.data.products;
          state.browserbysubcategorybrand = action.payload.data.filter;
       
          state.isLoading = false;
          state.error = null;
        })
      .addCase(getbrandofferdetail.fulfilled, (state, action) => {
        
           state.brandofferproducts = action.payload.data;
           state.isLoading = false;
           state.error = null;
         })
      
      .addCase(getbrandoffer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
      
  },
});

export default brandSlice.reducer;

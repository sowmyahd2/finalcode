import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import  BASE_URL  from '../../Config/apii';

export const fetchdepartment = createAsyncThunk('department/fetchdepartment', async () => {
  try {

    const response = await fetch(`${BASE_URL}department`);
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
export const getCategoryByDepartment = createAsyncThunk('department/getCategoryByDepartment', async ({id}) => {
  try {

    const response = await fetch(`${BASE_URL}department/category/${id}`);
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
export const getstoresByDepartment = createAsyncThunk('department/getstoresByDepartment', async ({id,selectedcity}) => {
  try {

    const response = await fetch(`${BASE_URL}department/browseby/${id}/${selectedcity}`);
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
export const getBrowseBySubCategory = createAsyncThunk('subcategory/getBrowseBySubCategory', async ({id,selectedcity}) => {
  try {

    const response = await fetch(`${BASE_URL}subcategory/browseby/${id}/${selectedcity}`);
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
export const getSubCategoryFilter = createAsyncThunk('subcategory/getSubCategoryFilter', async ({id,selectedcity}) => {
  try {

    const response = await fetch(`${BASE_URL}subcategory/filterlist/${id}/${selectedcity}`);
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

export const subcategorySlice = createSlice({
  name: 'department',
  initialState: {
    isLoading: false,
    isError: false,
    departments: [],
    categoryDepartment:[],
    storesDepartment:[],
    subcategoryfilters:[],
    BrowseBySubCategoryStore:[],
    BrowseBySubCategorybrand:[],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchdepartment.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchdepartment.fulfilled, (state, action) => {
  
        state.departments = action.payload.data;
        state.isLoading = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(getCategoryByDepartment.fulfilled, (state, action) => {
  
        state.categoryDepartment = action.payload.data;
        state.isLoading = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(getSubCategoryFilter.fulfilled, (state, action) => {
        
        state.subcategoryfilters = action.payload.data;
        state.isLoading = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(getBrowseBySubCategory.fulfilled, (state, action) => {
  
        state.BrowseBySubCategoryStore = action.payload.data.store;
        state.BrowseBySubCategorybrand = action.payload.data.brand;
        state.isLoading = false;
        state.isError = false;
        state.error = null;
      })
    
      
      .addCase(getstoresByDepartment.fulfilled, (state, action) => {
  
        state.storesDepartment = action.payload.data;
        state.isLoading = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchdepartment.rejected, (state, action) => {
        
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default subcategorySlice.reducer;

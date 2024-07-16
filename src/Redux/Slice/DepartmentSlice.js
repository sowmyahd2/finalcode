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
export const getstoresByDepartment = createAsyncThunk('department/getstoresByDepartment', async ({selectedCity,id}) => {
  try {
    const response = await fetch(`${BASE_URL}department/browseby/8/mysore`);

 
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
export const departmentSlice = createSlice({
  name: 'department',
  initialState: {
    isLoading: false,
    isError: false,
    departments: [],
    categoryDepartment:[],
    departmentstores:[],
  departmentbrands:[],
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
      .addCase(getstoresByDepartment.fulfilled, (state, action) => {
console.log(action.payload);
        state.departmentstores = action.payload.data.store;
        state.departmentbrands = action.payload.data.brand;
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

export default departmentSlice.reducer;

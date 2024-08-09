import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BASE_URL from '../../Config/apii';

export const getProductByDepartment = createAsyncThunk('products/getProductByDepartment/', async ({ selectedCity, id }) => {
  try {
  
    const response = await fetch(`${BASE_URL}products/department/${selectedCity}/${id}`);
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
export const getproductdetail = createAsyncThunk('products/getproductdetail/', async ({ selectedCity, id }) => {
  try {

  const pincode=570009;
    const response = await fetch(`${BASE_URL}products/${id}/${selectedCity}/${pincode}`);
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
export const getProductByMaincategory = createAsyncThunk('products/maincategory/', async ({ selectedCity, id, limit = 24, offset = 0, brandIds, price, sort }) => {
  try {
    const response = await fetch(`${BASE_URL}products/maincategory/${selectedCity}/${id}`);
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

export const getsubcategoryproducts = createAsyncThunk('products/getsubcategoryproducts/', async ({ selectedCity, id }) => {
  try {

    const response = await fetch(`${BASE_URL}products/subcategory/${selectedCity}/${id}`);
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

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    isLoading: false,
    isError: false,
    departmentproducts: [],
    subcategoryproducts: [],
    maincategoryproducts: [],
    productByMaincategoryHasMore: true,
    productBySubcategoryHasMore:true,
    productdetails:[],
    availableSize:[],
    productimages:[],
    similarproducts:[],
    specification:[],
    sellers:[],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductByDepartment.pending, (state) => {
        state.isLoading = true;
        state.isError   = false;
        state.error     = null;
      })
      .addCase(getProductByDepartment.fulfilled, (state, action) => {
        state.departmentproducts = action.payload.data;
        state.isLoading = false;
        state.isError   = false;
        state.error     = null;
      })
      .addCase(getProductByDepartment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError   = true;
        state.error     = action.error.message;
      })
      .addCase(getProductByMaincategory.pending, (state) => {
        state.isLoading = true;
        state.isError   = false;
        state.error     = null;
      })
      .addCase(getProductByMaincategory.fulfilled, (state, action) => {
        state.maincategoryproducts = action.payload.data;
        state.productByMaincategoryHasMore = action.payload.length > 0;
        state.isLoading = false;
        state.isError   = false;
        state.error     = null;
      })
      .addCase(getProductByMaincategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError   = true;
        state.error     = action.error.message;
      })
      .addCase(getsubcategoryproducts.pending, (state) => {
        state.isLoading = true;
        state.isError   = false;
        state.error     = null;
      })
      .addCase(getsubcategoryproducts.fulfilled, (state, action) => {
        state.subcategoryproducts = action.payload.data;
        state.productBySubcategoryHasMore=action.payload.length > 0;
        state.isLoading = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(getproductdetail.fulfilled, (state, action) => {
       
        state.productdetails = action.payload.data.productdetail;
        state.availableSize  = action.payload.data.availableSize;
        state.productimages  = action.payload.data.images;
        state.similarproducts= action.payload.data.similarproducts;
        state.sellers= action.payload.data.sellers;
        state.specification= action.payload.data.specification;
        state.isLoading      = false;
        state.isError        = false;
        state.error          = null;
      })
      
      .addCase(getsubcategoryproducts.rejected, (state, action) => {
        state.isLoading       = false;
        state.isError         = true;
        state.error           = action.error.message;
      });
  },
});

export default productSlice.reducer;

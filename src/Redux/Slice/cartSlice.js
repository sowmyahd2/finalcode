import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BASE_URL from '../../Config/apii';


export const addtopcart = createAsyncThunk(
  'cart/pcart',
 async (body, { rejectWithValue }) => {
    try {


      return body;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addtohcart = createAsyncThunk(
  'cart/hcart',
 async (body, { rejectWithValue }) => {
    try {


      return body;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const removehcart = createAsyncThunk(
  'cart/removehcart',

 async ({id }, { rejectWithValue }) => {
    try {


      return { id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const removepcart = createAsyncThunk(
  'cart/removepcart',
 async ({id }, { dispatch }) => {
    try {


      return { id };
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  }
);
export const addtodbcart = createAsyncThunk(
  'cart/addtodbcart',
  async (body, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}Products/addtocart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Failed to send OTP');
      }

      const data = await response.json();
     return true;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
    pcartitems: [],
    pcarttotal:0,
     hcartitems: [],
     carttotal:0,
        hcarttotal:0,
    error: null,

  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(addtopcart.fulfilled, (state, action) => {
        state.pcartitems.push(action.payload);

state.pcarttotal += 1;
state.carttotal += 1;

        state.isLoading = false;
        state.error = null;
      })
    .addCase(addtohcart.fulfilled, (state, action) => {
        state.hcartitems.push(action.payload);

state.hcarttotal += 1;
state.carttotal += 1;
        state.isLoading = false;
        state.error = null;
      })

  .addCase(removepcart.fulfilled, (state, action) => {
  const {id} = action.payload;

   state.pcarttotal -= 1;
   state.carttotal -= 1;
      state.pcartitems = state.pcartitems.filter(item => item.id !== id);


      })
        .addCase(removehcart.fulfilled, (state, action) => {
              const {id} = action.payload;

 state.hcartitems = state.hcartitems.filter(item => item.id !== id);

 state.hcarttotal -= 1;
 state.carttotal -= 1;

            });

  },
});
export default cartSlice.reducer;

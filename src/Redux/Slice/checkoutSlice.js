import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'http://3.109.102.154/reactapi/index.php/';
import { removepcart,removehcart } from './cartSlice';

export const fetchpickdetail = createAsyncThunk('checkout/pickdetail', async ({ type,selectedCity,userid }, { dispatch }) => {
  try {
    const response1 = await fetch(`${BASE_URL}Cart/view/${type}/${selectedCity}/${userid}`);
    const json1 = await response1.json();

    return json1;
  } catch (error) {
    // Handle error
    throw error;
  }
});
export const fetchhcartdetail = createAsyncThunk('checkout/homedetail', async ({ type,selectedCity,userid }, { dispatch }) => {
  try {
    const response1 = await fetch(`${BASE_URL}Cart/view/${type}/${selectedCity}/${userid}`);
    const json1 = await response1.json();

    return json1;
  } catch (error) {
    // Handle error
    throw error;
  }
});
export const placepickuporder = createAsyncThunk(
  'checkout/placepickuporder',
  async (body, { rejectWithValue }) => {

    try {
      const response = await fetch(`${BASE_URL}checkout/placepickorder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

   const {pcartitems} = getState().rootReducer.cart;

   pcartitems.forEach((item) => {
       dispatch(removepcart({ id: item.id }));
     });
      if (!response.ok) {
        throw new Error('cannot placeorder');
      }

      const data = await response.json();
     return true;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const placehomeorder = createAsyncThunk(
  'checkout/placehomeorder',
  async (body, { rejectWithValue }) => {

    try {
      const response = await fetch(`${BASE_URL}checkout/placehomeorder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

   const {hcartitems} = getState().rootReducer.cart;

   hcartitems.forEach((item) => {
       dispatch(removehcart({ id: item.id }));
     });
      if (!response.ok) {
        throw new Error('cannot placeorder');
      }

      const data = await response.json();
     return true;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const checkoutSlice = createSlice({
  name: 'checkout', // Change the name to 'city' to reflect the purpose of the slice
  initialState: {
    pickorders: [],
    homeorders: [],
    recipient:[],
    psellerdetail:[],
    hsellerdetail:[],
    reserverdays:[],

  },
  reducers: {},

extraReducers: (builder) => {
  builder.addCase(fetchpickdetail.pending, (state) => {
    state.isLoading = true;
    state.error = null;
  })
  builder.addCase(fetchpickdetail.fulfilled, (state, action) => {
    state.pickorders = action.payload.data.cartproducts;
     state.recipient = action.payload.data.recipient;
      state.psellerdetail = action.payload.data.sellerdetail;
         state.reserverdays = action.payload.data.reserverdays;

    state.isLoading = false;
    state.error = null;
  })
   builder.addCase(fetchhcartdetail.fulfilled, (state, action) => {
      state.homeorders = action.payload.data.cartproducts;
      state.hsellerdetail = action.payload.data.sellerdetail;
      state.isLoading = false;
      state.error = null;
    })
  builder.addCase(fetchpickdetail.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.error.message;
  });
    builder.addCase(placepickuporder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
       action.dispatch(setcart({ pcartitems: [] }));
    });

},
});
export const { setcheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
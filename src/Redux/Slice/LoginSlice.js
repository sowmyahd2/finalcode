import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import BASE_URL from '../../Config/apii';
export const mobilelogin = createAsyncThunk('user/mobilelogin', async ({number}) => {
    try {
  
        const body = {"email":"","password":"","number":number }

        const response = await fetch(`${BASE_URL}auth`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
      
      const json = await response.json();
   
      return json;
    } catch (error) {
      // Handle error
      throw error;
    }
  });
  const loginSlice = createSlice({
    name: 'user',
    initialState: {
        UserId: "",
        UserName:"",
          // Add error property to the initial state
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(mobilelogin.pending, (state) => {
         
          state.isLoading = true;
          state.error = null;
        })
        .addCase(mobilelogin.fulfilled, (state, action) => {
   
     localStorage.setItem('UserId', action.payload.data.UserId);
     localStorage.setItem('UserName', action.payload.data.UserName);
          state.UserId = action.payload.data.UserId;
          state.UserName=action.payload.data.UserName
          state.isLoading = false;
          state.error = null;
        })
        .addCase(mobilelogin.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message; // Handle the error message
        });
     
    },
  });
  
  export default loginSlice.reducer;
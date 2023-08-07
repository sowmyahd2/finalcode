import { combineReducers  } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import cityReducer from './Slice/CitySlice';


// Create a persist configuration for the root reducer
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['selectedCity'],
  // Name of the slice to persist
};

// Combine the city reducer with other reducers if necessary
const rootReducer = combineReducers({
  city: persistReducer(persistConfig, cityReducer),
  

  
 
  // Add other reducers here if needed
});

export default rootReducer;
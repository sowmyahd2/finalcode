import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer'; // Make sure the path is correct

export const store = configureStore({
  reducer: rootReducer,
 
});

export const persistor = persistStore(store);

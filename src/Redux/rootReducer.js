import { combineReducers } from '@reduxjs/toolkit';
import cityReducer from './Slice/CitySlice'; // Adjust the path as per your structure
import departmentReducer from './Slice/DepartmentSlice'; // Adjust the path as per your structure
import  searchReducer  from './Slice/SearchSlice';
import mostViewedReducer from './Slice/MostviewSlice';
import productReducer from './Slice/ProductSlice';
import brandRedducer from './Slice/BrandSlice';
import categoryReducer from './Slice/CategorySlice';
import subcategoryReducer from './Slice/SubcategorySlice';
import shoppageReducer from './Slice/ShopPageSlice';

const rootReducer = combineReducers({
  city: cityReducer,
  department: departmentReducer,
  mostviewed:mostViewedReducer,
  search:searchReducer,
  product:productReducer,
  brand:brandRedducer,
  category:categoryReducer,
  subcategory:subcategoryReducer,
  shoppage:shoppageReducer
  // Add other reducers here if needed
});

export default rootReducer;

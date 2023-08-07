import {combineReducers} from 'redux'
import DepartmentReducer from './DepartmentReducer';
import BrandReducer from './BrandReducer';
import StoreReducer from './StoreReducer';
import ProductReducer from './ProductReducer';
import CityReducer from './CityReducer';
import UserPreferenceReducer from './UserPreferenceReducer';
import drawer from './DrawerReducer';
import CategoryReducer from './CategoryReducer';
import SubCategoryReducer from './SubCategoryReducer';
import NewArrivalsReducer from './NewArrivalsReducer';
import ShopPageReducer from './ShoppageReducer';
import SearchReducer from './SearchReducer';
import LoginReducer from './LoginReducer';
import CartReducer from './CartReducer';
import CheckoutReducer from './CheckoutReducer';
import UserprofileReducer from './UserprofileReducer';

const rootReducer = combineReducers({
    Department: DepartmentReducer,
    Brand: BrandReducer,
    Store: StoreReducer,
    Product: ProductReducer,
    City: CityReducer,
    UserPreference : UserPreferenceReducer,
    drawer: drawer,
    Category:CategoryReducer,
    SubCategory:SubCategoryReducer,
    NewArrivals:NewArrivalsReducer,
    ShopPage:ShopPageReducer,
    Search:SearchReducer, 
    Login:LoginReducer,
    Cart:CartReducer,
    Userprofile:UserprofileReducer,
    checkout:CheckoutReducer
}) 

export default rootReducer; 
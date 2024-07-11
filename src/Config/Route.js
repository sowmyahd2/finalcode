import React, { Suspense } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store, persistor } from '../Redux/Store';
import { PersistGate } from 'redux-persist/integration/react'

import Loader from '../Component/Loader';


const Home = React.lazy(() => import ("../Container/Home"));
const Department = React.lazy(() => import ('../Container/Department'));
const Deals = React.lazy(() => import ('../Container/Deals'));
const BrandOffer = React.lazy(() => import('../Container/BrandOffer'));
const SubCategory = React.lazy(() => import ('../Container/SubCategory'));
const MainCategory = React.lazy(() => import('../Container/MainCategory'));
const ProductDetails = React.lazy(() => import('../Container/ProductDetails'))
const ShopPage = React.lazy(() => import('../Container/ShopPage'));
const NewArrivals = React.lazy(() => import('../Container/NewArrivals'));
const BrandOfferDetail = React.lazy(() => import('../Container/BrandOfferDetails'));
const NewArrivalsProduct = React.lazy(() => import('../Container/NewArrivalsProduct'));
const BrandCategory = React.lazy(() => import('../Container/BrandCategory'));
const BrandMainCategory = React.lazy(() => import('../Container/BrandMainCategory'));
const BrandSubCategory = React.lazy(() => import('../Container/BrandSubCategory'));
const StoreMainCategoryProducts = React.lazy(() => import('../Container/StoreMainCategory'));
const LoginPage = React.lazy(() => import('../Container/LoginPage'));
const CartPage = React.lazy(() => import('../Container/CartPage'));
const CheckoutCart = React.lazy(() => import('../Container/CheckoutPage'));
const ProfilePage = React.lazy(() => import('../Container/ProfilePage'));
const Success = React.lazy(() => import('../Container/Success'));
const Failure = React.lazy(() => import('../Container/Failure'));
const Pickorderdetail = React.lazy(() => import('../Container/Pickorderdetail'));
const Homedeliveryorders = React.lazy(() => import('../Container/Homedeliveryorders'));
const Homedeliveryorderdetail = React.lazy(() => import('../Container/Homedeliveryorderdetail'));
const Aboutus =React.lazy(()=>import("../Container/Aboutus"));
const Contactus=React.lazy(()=>import("../Container/Contactus"));
const CheckoutHome= React.lazy(()=>import("../Container/Checkouthome"));
export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={<Loader />} persistor={persistor} >
                <Suspense fallback={<Loader />} >
                    <Router  forceRefresh={true}>
                        <Switch>
                            <Route path="/" render={() => <Home />} exact />
                            <Route path="/department/category/:id" render={() => <Department />} exact />
                            <Route path="/deals" render={() => <Deals />} exact />
                            <Route path="/deals/offers/:id" render={() => <BrandOffer />} exact />
                            <Route path="/subcategory/:id" render={() => <SubCategory />} exact />
                            <Route path="/maincategory/:id" render={() => <MainCategory />} exact />
                            <Route path="/productdetails/:id" render={() => <ProductDetails />} exact />
                            <Route path="/shoppage/:DealerId" render={() => <ShopPage />} exact />
                            <Route path="/newarrivals" render={() => <NewArrivals />} exact />
                            <Route path="/brandofferdetail/:DepartmentId/:BrandId" render={() => <BrandOfferDetail />} exact />
                            <Route path="/newarrivals/products/:DepartmentId/:BrandId" render={() => <NewArrivalsProduct />} exact />
                            <Route path="/brandcategory/:id" render={() => <BrandCategory />} exact />
                            <Route path="/brands/maincategory/:DepartmentId/:BrandId" render={() => <BrandMainCategory />} exact />
                            <Route path="/brands/subcategory/:DepartmentId/:BrandId" render={() => <BrandSubCategory />} exact />
                            <Route path="/store/maincategory/products/:DealerId/:DepartmentId" render={() => <StoreMainCategoryProducts />} exact />
                            <Route path="/login" render={() => <LoginPage />} exact />
                            <Route path="/aboutus" render={() => <Aboutus />} exact />
                            <Route path="/Cart" render={() => <CartPage />} exact />
                            <Route path="/contactus" render={() => <Contactus />} exact />
                            <Route path="/brandcategory/:id" render={() => <BrandCategory />} exact />         
                        </Switch>
                    </Router>
                </Suspense>
            </PersistGate>
        </Provider> 
    )
}

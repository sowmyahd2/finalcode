import React, { useEffect, Suspense, lazy,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'; 
import { getMostViewProduct } from '../Redux/Action/ProductAction';
import { getMostViewStore } from '../Redux/Action/StoreAction';
import './styles/Home.css'

const Loader = React.lazy(() => import('../Component/Loader'));
const Header = lazy(() => import('../Component/Header/Header'));
const Banner = lazy(() => import('../Component/Banner/Banner'));
const Vertical = lazy(() => import('../Component/Verticals/Verticals'));
const Cauroselproduct = lazy(() => import('../Component/Caurosel/Cauroselproduct'));
const Cauroselstore = lazy(() => import('../Component/Caurosel/Cauroselstore'));
const Cauroselbrand = lazy(() => import('../Component/Caurosel/Cauroselbrand'))
const Footer = lazy(() => import('../Component/Footer/Footer'));
const Homeslider = lazy(() => import('../Component/Homeslider/Homeslider'));
const Home = () => {
    
    const dispatch = useDispatch();
    const city = useSelector(state => state.UserPreference.city)
    const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
      
        (position) => {
           
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.log(error.message);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);
    useEffect(() => {
        dispatch(getMostViewProduct(city))
        dispatch(getMostViewStore(city))

    }, [city])

    const mostViewProduct = useSelector(state => state.Product.mostView);
    const mostViewStore = useSelector(state => state.Store.mostView);
   console.log("dd");
    const offersBrand = useSelector(state => state.Department.department);
    return ( 
        <Suspense fallback={<Loader />} >
           <Header />
            <div className="container-fluid">                                   
                <div className="row">
                    <div className="bannerhome col-lg-12 col-md-12 col-sm-12 col-12">                        
                    <Suspense fallback={<Loader />} ><Homeslider /></Suspense>
                    <Suspense fallback={<Loader />} ><Banner /></Suspense>
                    <Suspense fallback={<Loader />} ><Vertical /></Suspense>
                    <Suspense fallback={<Loader />} ><Cauroselproduct data={mostViewProduct} product={true} /></Suspense>
                    <Suspense fallback={<Loader />} ><Cauroselstore data={mostViewStore} store={true} /></Suspense>
                    <Suspense fallback={<Loader />} ><Cauroselbrand data={offersBrand} offer={true} /></Suspense>
                    </div>
                </div>
            </div>
            <div className="footerhr"></div>
            <Footer />
        </Suspense>
        
    )
}

export default React.memo(Home);


// https://squoosh.app/

// http://13.127.75.215/reactapi/index.php/City

// http://3.109.102.154/reactapi/index.php/City
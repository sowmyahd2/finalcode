import React, { useEffect, Suspense, lazy,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'; 


import './styles/Home.css'
import { fetchMostViewedProducts,fetchMostViewedstores } from "../Redux/Slice/MostviewSlice";
import {fetchdepartment} from '../Redux/Slice/DepartmentSlice' // Ensure this path is correct
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
   
  
  
    useEffect(() => {
        dispatch(fetchMostViewedProducts({ selectedCity: "mysore" }));
        dispatch(fetchMostViewedstores({ selectedCity: "mysore",pincode:"560001" }));
    dispatch(fetchdepartment());
    }, [dispatch]);
  
    
    const {mostviewedproducts,mostviewedstores}=useSelector(state=>state.mostviewed);
    const {departments} = useSelector(state => state.department);

console.log([departments]);
    
    return ( 
        <Suspense fallback={<Loader />} >
        
          <div>home</div>
            
        </Suspense>
        
    )
}

export default React.memo(Home);


// https://squoosh.app/

// http://13.127.75.215/reactapi/index.php/City

// http://3.109.102.154/reactapi/index.php/City
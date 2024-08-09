import React, {useEffect} from 'react'

import Header from '../Component/Header/Header';
import Productpage from '../Component/ProductPage/ProductPage';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import SimilarProduct from '../Component/ProductPage/SimilarProduct';
import Footer from '../Component/Footer/Footer';
import {getproductdetail} from '../Redux/Slice/ProductSlice';


const ProductDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const city = "mysore";
    useEffect(()=>{
        dispatch(getproductdetail({"selectedCity":city, id:id}))

    },[])
   
    const {productdetails,productimages}=useSelector(state=>state.product)
   console.log("dss",productdetails);
    return(
        <>
        <Header />

        <div className='container-fluid'>
      <Productpage/>
        </div>
        
        
        <Footer />
        </>
    )
}

export default ProductDetails;
import React, {useEffect} from 'react'
import './CommonContainer.css';
import Header from '../Component/Header/Header';
import Productpage from '../Component/ProductPage/ProductPage';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../Redux/Action/ProductAction';
import SimilarProduct from '../Component/ProductPage/SimilarProduct';
import Footer from '../Component/Footer/Footer';


const ProductDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const city = useSelector(state => state.UserPreference.city)
    useEffect(()=>{
        dispatch(getProductDetails(city, id))

    },[])
   
    
    const mostViewProduct = useSelector(state => state.Product.mostView);

    return(
        <>
        <Header />
        <Productpage />
        <div className='container-fluid'>
        <SimilarProduct data={mostViewProduct} product={true} />
        </div>
        
        
        <Footer />
        </>
    )
}

export default ProductDetails;
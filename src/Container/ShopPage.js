import React,{useEffect} from 'react'

import Header from '../Component/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import StoreFront from '../Component/StoreFront/StoreFront';
import { fetchshopcatproducts } from '../Redux/Slice/ShopPageSlice';
import StoreFrontProducts from '../Component/StoreFront/StoreFrontProducts';
import { pathOr } from 'ramda';

const ShopPage = () => {
    const { DealerId } = useParams();
        const dispatch = useDispatch();
        const city = "mysore";
       
        useEffect(()=>{
            dispatch(fetchshopcatproducts({"selectedCity":city,dealerid:DealerId}))
    
        })
        const Detail = useSelector(state => pathOr({},['detail'], state.shoppage))
    
    return (
        <>
        <Header />
        <StoreFront  detail={Detail}/>
        <StoreFrontProducts />
        </>
    )
}

export default ShopPage;
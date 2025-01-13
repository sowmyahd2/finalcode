import React,{useEffect} from 'react'
    
import Header from '../Component/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import StoreFront from '../Component/StoreFront/StoreFront';
import { getShopPage,getShopPageproducts }from '../Redux/Action/shopPageAction';
import StoreFrontProducts from '../Component/StoreFront/StoreFrontProducts';
import { pathOr } from 'ramda';

const ShopPage = () => {
    const { DealerId } = useParams();
        const dispatch = useDispatch();
        const city = useSelector(state => state.UserPreference.city)
        
        useEffect(()=>{
            dispatch(getShopPage(city,DealerId))
            dispatch(getShopPageproducts (city,DealerId))
            
    
        })
       
    const shopdetail= useSelector(state => state.ShopPage)

    const shopproducts = useSelector(state => state.ShopPage)

    
    console.log("data",shopproducts);
    return (
        <>
        <Header />
        <StoreFront  detail={shopdetail}/>
        <StoreFrontProducts />
        </>
    )
}

export default ShopPage;
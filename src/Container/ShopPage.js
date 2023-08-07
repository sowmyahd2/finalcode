import React,{useEffect} from 'react'
import './CommonContainer.css';
import Header from '../Component/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import StoreFront from '../Component/StoreFront/StoreFront';
import { getShopPage } from '../Redux/Action/shopPageAction';
import StoreFrontProducts from '../Component/StoreFront/StoreFrontProducts';
import { pathOr } from 'ramda';

const ShopPage = () => {
    const { DealerId } = useParams();
        const dispatch = useDispatch();
        const city = useSelector(state => state.UserPreference.city)
        useEffect(()=>{
            dispatch(getShopPage(city,DealerId))
    
        })
        const Detail = useSelector(state => pathOr({},['detail'], state.ShopPage.shopPage))
    
    return (
        <>
        <Header />
        <StoreFront  detail={Detail}/>
        <StoreFrontProducts />
        </>
    )
}

export default ShopPage;
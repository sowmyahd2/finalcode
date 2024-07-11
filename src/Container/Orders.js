import React, {useEffect} from 'react'

import Header from '../Component/Header/Header';
import Orderpage from '../Component/Orders/Orderpage';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Footer from '../Component/Footer/Footer';


const Orders = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
   
   
    
   

    return(
        <>
        <Header />
        <Orderpage/>
        <div className='container-fluid'>
       
        </div>
        
        
        <Footer />
        </>
    )
}

export default Orders;
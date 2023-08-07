
import React, {useEffect} from 'react'
import './CommonContainer.css';
import Header from '../Component/Header/Header';
import pickdetail from '../Component/Orders/pickdetail';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Footer from '../Component/Footer/Footer';


const Pickupinshoporderdetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
   
   
    
   

    return(
        <>
        <Header />
        
        <div className='container-fluid'>
       <p>fdf</p>
        </div>
        
        
        <Footer />
        </>
    )
}

export default Pickupinshoporderdetail;
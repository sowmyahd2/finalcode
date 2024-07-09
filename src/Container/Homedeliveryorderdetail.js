import React, {useEffect} from 'react'

import Header from '../Component/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import {gethomedeliverysorderdetail } from '../Redux/Action/UserprofileAction';
import Footer from '../Component/Footer/Footer';
import { pathOr } from 'ramda';
import { useParams } from 'react-router-dom';

import Homedeliveryorderdetails from '../Component/Orders/Homedeliveryorderdetail';
const Homedeliveryorderdetail = () => {

    
    const { city,orderid } = useParams();
  
    const dispatch = useDispatch();
    const user= useSelector(state => state.Login)
    const profile = useSelector(state => pathOr({},['userdetails'], state.Userprofile.homedeliveryorderdetail))
    const shopdetail = useSelector(state => pathOr({},['shopdetail'], state.Userprofile.homedeliveryorderdetail))
  const order = useSelector(state => pathOr({},['orderdetails'], state.Userprofile.homedeliveryorderdetail))

const userId = pathOr("", ["user", "UserId"], user);  
    
   useEffect(()=>{
     
   
    dispatch(gethomedeliverysorderdetail(city, orderid))
 },[])
 
    

  
 

    return(
        <>
        <Header />
        
        <div className='container-fluid'>
        
        <div>
            <strong>Order Detail</strong>
            <div class="row">
           <p>Order Id:    {orderid}</p>
           <p> {profile.UserName}</p>
           
           <p>{profile.CreatedOn}</p>
           <p>{profile.Mobile}</p>
           <p>{profile.MobileNumber}</p>
           <p>Order Amount:{profile.OrderAmount}</p>
           <p>Email:{profile.EmailId}</p>
           </div>
        </div>
        <div>
            <strong>Product  Detail</strong>
            <div>
         
<Homedeliveryorderdetails orderdetail={order} shopdetail={shopdetail}/>

           
      
        
            </div>
 </div>
    </div>
        <Footer />
        </>
    )
}

export default Homedeliveryorderdetail;
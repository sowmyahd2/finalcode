import React, {useEffect, useState} from 'react'
import '../Profile/Profile.css';


import { useSelector, useDispatch } from 'react-redux';
import Orderdetailpage from './Orderdetail';
import Shopdetail from './Shopdetail';
import { pathOr } from 'ramda';
const Pickdetail = (props) => {
   const orderdetail=props.orderdetail;
const shops=props.shopdetail;
  const user= useSelector(state => state.Login)
  const city = useSelector(state => state.UserPreference.city)
  const userId = pathOr("", ["user", "UserId"], user);  
  const dispatch = useDispatch();
    console.log(shops); 

    return(
        <div className="profilelayout mt-2">
            <div className="container-fluid">
                <div className="row d-none d-lg-block">
                    <div className="profileorder col-lg-3 col-md-3 col-3 ">                        
                    
      
         
        
      </div>
      <div className="profileorder col-lg-3 col-md-3 col-3 ">  
      <div className="row">
      {orderdetail.map((data,index)=>{
                                    return(
                                        <Orderdetailpage order={data} key={data.OrderId} />
                                    )
                                })}         
                            </div>          
                            <div className="row">
      {shops.map((data1,index)=>{
                                    return(
                                        <Shopdetail shopdetails={data1}  />
                                    )
                                })}         
                            </div> 
                 </div>
                 </div>
            </div>
               
        </div>
    )
}

export default Pickdetail;
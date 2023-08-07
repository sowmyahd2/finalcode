import React, {useEffect, useState} from 'react'
import '../Profile/Profile.css';
import { userprofile,getpsorders } from '../../Redux/Action/UserprofileAction';

import { useSelector, useDispatch } from 'react-redux';

import Pickupinshop from '../../Component/Orders/Pickupinshop';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { pathOr } from 'ramda';
const OrderPage = () => {
  const profile = useSelector(state=>state.Userprofile.profile.user)
  const orders = useSelector(state=>state.Userprofile.psorders)
  const user= useSelector(state => state.Login)
  const city = useSelector(state => state.UserPreference.city)
  const userId = pathOr("", ["user", "UserId"], user);  
  const dispatch = useDispatch();
    
    useEffect(() => {
      
        dispatch(userprofile(userId));
        dispatch(getpsorders(userId,city));
    }, [])
    
    return(
        <div className="profilelayout mt-2">
            <div className="container-fluid">
                <div className="row d-none d-lg-block">
                  
  
     
                                {orders.map((data,index)=>{
                                    return(
                                        <Pickupinshop link={"/pickorderdetail/"+city+"/"+data.PS_OrderId} name={data.ProductName} image={data.thumb_image} key={index} />
                                    )
                                })}
                            </div>          
                
                
               
            </div>
               
        </div>
    )
}

export default OrderPage;
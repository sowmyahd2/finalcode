import React, {useEffect} from 'react'


import {gethomedeliverysorders } from '../Redux/Action/UserprofileAction';
import { userprofile } from '../Redux/Action/UserprofileAction';
import { useDispatch, useSelector } from 'react-redux';
import Homedeliveryorder from '../Component/Orders/Homedeliveryorders';
import { pathOr } from 'ramda';



const Homedeliveryorders = () => {

    
    const dispatch = useDispatch();
    const user= useSelector(state => state.Login)
    
    const orders = useSelector(state=>state.Userprofile.homedeliveryorders)
const userId = pathOr("", ["user", "UserId"], user);  
    const city = useSelector(state => state.UserPreference.city)


   useEffect(()=>{
     
   dispatch(userprofile(userId));
   dispatch(gethomedeliverysorders(userId, city))
},[userId, city])

    return(
        <>
      
  <div>
   <Homedeliveryorder orders={orders}  city={city}/>
  </div>

                  
       
        
        
        
        </>
    )
}

export default Homedeliveryorders;
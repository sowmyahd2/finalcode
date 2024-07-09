import React, {useEffect, useState} from 'react'

import Header from '../Component/Header/Header';
import {getpickorderdetail,cancelproduct } from '../Redux/Action/UserprofileAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { pathOr } from 'ramda';
import Footer from '../Component/Footer/Footer';
import Pickdetail from '../Component/Orders/pickdetail';




const Pickorderdetail = () => {

    const { city,orderid } = useParams();
   
    const dispatch = useDispatch();
    const [resonid, setresonid] = useState("");
    const[comment,setcomment]=useState("");
    
    const [open, setOpen] = useState(false);
    const [prodimage, setprodimage] = useState();
    const [prodid, setprodid] = useState();

    useEffect(()=>{
        dispatch(getpickorderdetail(city,orderid))
  
    },[city,orderid])
    const onOpenModal = (image,id) => {
        
        setprodimage(image);
        setprodid(id);
        setOpen(true);
    }
   
    const onCloseModal = () => setOpen(false);
  
  const profile = useSelector(state => pathOr({},['userdetail'], state.Userprofile.pickupordertails))

  const shopdetail = useSelector(state => pathOr({},['shopdetails'], state.Userprofile.pickupordertails))
  const order = useSelector(state => pathOr({},['orderdetail'], state.Userprofile.pickupordertails))
  const reasons= useSelector(state => pathOr({},['cancelreasons'], state.Userprofile.pickupordertails))

  const cancelorder=()=>{
  dispatch(cancelproduct(city,prodid,resonid,comment))
}


    return(
        <>
      
    <Header/>
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
             
<Pickdetail orderdetail={order} shopdetail={shopdetail}/>

               
          
            
                </div>
     </div>
        </div>
        
        
        <Footer />
        </>
    )
}

export default Pickorderdetail;
import React, {useEffect, useState} from 'react'
import './Checkout.css'

import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from 'react-redux';
import { placehomeOrder } from '../../Redux/Action/CheckoutAction';
import { Useraddress } from '../../Redux/Action/UserprofileAction';
import Shippingaddress from './Shippingaddress';
import { Modal } from 'react-responsive-modal';

import Ship from './Ship';
import{pathOr} from 'ramda';
const Checkouthome = () => {
    const dispatch = useDispatch();
    const user= useSelector(state => state.Login)
    const userId = pathOr("", ["user", "UserId"], user);
    const [shipid, setshipid] = useState("");
    const myRef = React.useRef(null);
    const [open, setOpen] = React.useState(false);
    useEffect(()=>{
        dispatch(Useraddress(userId))

    },[])
  const  placehorder=()=>{
   
        dispatch(placehomeOrder(2,city,shipid));
    }
    const adress = useSelector(state => state.Userprofile.address)
    const city = useSelector(state => state.UserPreference.city)
    const viewCart = useSelector(state => state.Cart.addtoCart)

    const renderShop = () => {
        const shops = []
        viewCart.forEach((shop, index) => {
            shops.push({
                delaerId: shop.DealerId,
                shopName: shop.ShopName,
                shopAddress: shop.ShopAddress,
                shopLogo: shop.ShopLogo,
                MobileNumber: shop.MobileNumber
            })
        })
        const result = [];
        const map = new Map();
        for (const item of shops) {
            if (!map.has(item.delaerId)) {
                map.set(item.delaerId, true);    // set any value to Map
                result.push({
                    delaerId: item.delaerId,
                    shopName: item.shopName,
                    shopAddress: item.shopAddress,
                    shopLogo: item.shopLogo,
                    MobileNumber: item.MobileNumber
                });
            }
        }
        return result.map((shop, index) => {
            return (
                <div className="selerdetails" key={index}>
                    <img className="img-fluid" src={"https://s3-ap-southeast-1.amazonaws.com/cityonnet-virtualmall/"+shop.shopLogo} />
                    <p>{shop.shopName}</p>
                    <p>Address : {shop.shopAddress}</p>
                    <p>Ph : {shop.MobileNumber}</p>
                    <p>Pickup in Shop Timings.
            <br />9:00 AM - 6:00 PM</p>
                </div>
            )
        })
    }
    return(
        <>
        <div className="checkoutlayout mt-2 d-flex justify-content-center">
            <div className="container-fluid">
                <div className="row justify-content-between">
                    <div className="recipient col-lg-6 col-sm-6 col-12">
                        <h5>Shipping Address</h5>
                        <div className="reciientdetail">
                    <Shippingaddress address={adress} setshipid={setshipid}/>
                        </div>
                        <div ref={myRef} />
      
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        container={myRef.current}
      >
    <Ship/>
                            
      </Modal>
                            <button onClick={() => setOpen(true)} className="recipientbutton">Add New Recipient Details</button>
                        </div>
                       
                    </div>
             
                <div className="row">
                    <div className="selectdate col-sm-6 col-12">
                    <div className="paymentoptionhome col-12 ">
                         
                        <div className="agrrepaymenthome">
                            
                        <div className="radiocheck">    
                        
                        <div className="form-check">
                        <label className="form-check-label" for="check1">
                            <input type="checkbox" className="form-check-input" id="check1" name="option1" value="something" checked />i agree to <span>terms of use</span> of Cityonnet.com
                        </label>
                        </div>
                        <button  onClick={() =>placehorder() } className="btn btn-primary placeordercheckout col-6">Place Order</button>
                        
                   
                        </div> 
                    </div>                                            
                    </div>                    
                    </div>
                </div>  
                <div className="row">
                    <div className="seller col-sm-6 col-12">
                        <h5>Seller Detail</h5>
                        <div className="selerdetails">
                        {renderShop()}
                        </div>
                        
                    </div>
                    
                </div>          

               
                     
            </div>
            </div>
        

        </>
    )
}
export default Checkouthome;
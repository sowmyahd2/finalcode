import React, { useState,useRef, useEffect } from 'react';
import './Checkout.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import {  placepickuporder,addreipient} from '../../Redux/Action/CheckoutAction';

import{pathOr} from 'ramda';
import { useHistory } from 'react-router';
import { Modal } from 'react-responsive-modal';
const Checkout = () => {
    const [startDate, setStartDate] = useState(new Date());
    const city = useSelector(state => state.UserPreference.city)
    const receipintid=useSelector(state => state.checkout.receipentid)
    const dispatch = useDispatch();
    const user = useSelector(state => state.Login)

    const userId = pathOr("", ["user", "UserId"], user);
    const viewCart = useSelector(state => state.Cart.addtoCart)
    const [receipentName,setreceipentName]=useState("");
   const[receipentNumber,setreceipentNumber]=useState("");
    const history = useHistory();
    const myRef = React.useRef(null);
    const [open, setOpen] = React.useState(false);
    const addDays = (days) => {
        const copy = new Date()
        copy.setDate(copy.getDate() + days)
        return copy
    }
    const  placepickorder=()=>{

var currentdate = new Date().getDate();
var redate=startDate.getDate();
var days=redate-currentdate;

      dispatch(placepickuporder(3,city,userId,days));
      window.location.href = "/";
    }
    useEffect(() => {
        
      }, [receipentName, receipentNumber]);
    const updatereceipient=()=>{
        if(receipentName==""){
            alert("please Enter Name of the recipient");
        }
        if(receipentNumber==""){
            alert("please Enter Number of the recipient");
        }
        else{
        dispatch(addreipient(receipentName,receipentNumber,userId,city))
       
        }
        };
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

    return (
        <>
            <div className="checkoutlayout mt-2 d-flex justify-content-center">
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <div className="recipient col-lg-6 col-sm-6 col-12">
                            <h5>Who Will Pickup?</h5>
                            <div className="reciientdetail">
                                <p>Name : <span>{receipentName}</span></p>
                                <p>Mobile : <span>{receipentNumber}</span></p>
                            </div>
                            <div ref={myRef} />
      
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        container={myRef.current}
      >
        <div className="reciientdetail">
                                <p>Name : <input type="text"  onChange={(e)=>setreceipentName(e.target.value)}/></p>
                                <p>Mobile :<input type="text" onChange={(e)=>setreceipentNumber(e.target.value)}/></p>
                                <button className="recipientbutton" onClick={()=>updatereceipient()}>submit</button>
                            </div>
                            
      </Modal>
                            <button onClick={() => setOpen(true)} className="recipientbutton">Add New Recipient Details</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="selectdate col-sm-6 col-12">
                            <h5>Select Prefered Date for Pickup in Shop</h5>
                            <div className="paymentoption col-12 ">
                                <h6>Select Date</h6>
                                <DatePicker className="datepick"
                                dateFormat="P"
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    minDate={new Date()}
                                    maxDate={addDays(3)}
                                    placeholderText="Select Date"
                                />
                                <div className="agrrepayment">
                                    <h6>Payment Option</h6>
                                    <div className="radiocheck">

                                            <div className="form-check">
                                                <label className="form-check-label" for="check1">
                                                    <input type="checkbox" className="form-check-input" id="check1" name="option1" value="something" checked />Pay at Store
                        </label>
                                            </div>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input checked type="radio" className="form-check-input" name="optradio" />i agree to <span>terms of use</span> of Pickup in Shop
                        </label>
                                            </div>
                                            <button  onClick={() =>placepickorder() } className="btn btn-primary placeordercheckout col-6">Place Order</button>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="seller col-sm-6 col-12">
                            <h5>Seller Detail</h5>
                            {renderShop()}

                        </div>

                    </div>



                </div>
            </div>


        </>
    )
}
export default Checkout;
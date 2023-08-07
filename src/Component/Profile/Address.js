import React,{useEffect,useRef, useState} from 'react';

import { useDispatch,useSelector } from 'react-redux';
import { Useraddress,Userlocality,addbillingaddress,Inactiveaddress} from '../../Redux/Action/UserprofileAction'
import { pathOr } from 'ramda';
const Address=()=>{
    
  
const user= useSelector(state => state.Login)
    const userId = pathOr("", ["user", "UserId"], user);
    const address=useRef();
    const Locality=useRef();
    const mobile=useRef();
    const name= useRef();
    const pincode =useRef();
    const city=useRef();
    const state=useRef();
    const Landmark=useRef();
    const useraddress = useSelector(state=>state.Userprofile.address);
    
    useEffect(() => {
        if(userId!=""){

      
       dispatch(Useraddress(userId));
    }
    }, [useraddress])

    
    const dispatch = useDispatch();
   

 
   const addaddress=()=>{
    
    dispatch(addbillingaddress(userId,mobile.current.value,name.current.value,
        Landmark.current.value,pincode.current.value,address.current.value));
    
}
   const inactiveaddress = async (id) => {
    try {
      const data = await dispatch(Inactiveaddress(id));
      
       
      
    } catch (err) {
      console.log(err);
      alert('Error, unable to delete');
    }
  };
  

  return (
    <>
    <main className='App'>
        <section>
        <div>
            {useraddress &&
            <div>   { useraddress.map(link => 
        <div className="row"style={{border: "1px solid"}}>
     
                  
                   <div className="col-sm-6">
                   <p onClick={()=>inactiveaddress(link.ShippingId)}>X</p>
                       <p>{link.ShippingId}</p>
                       <p>{link.MobileNumber}</p>
                       <p>{link.BillingAddress}</p>
                       <p>{link.Locality}</p>
                       <p>{link.City}</p>
                       <p>{link.State+"-"+link.Pincode}</p>
       </div></div>   
   )}</div>}
            <div>
                <p>Shipping address</p>
                <form>
                
                            <div className="form-group row">
                                <label for="inputPincode" className="col-sm-3 col-form-label">Pincode</label>
                                <div className="col-sm-9">
                                <input type="text"  ref={pincode}  maxLength={6} minLength={6} className="form-control" id="inputPincode" placeholder="Pincode" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="inputName" className="col-sm-3 col-form-label">Name</label>
                                <div className="col-sm-9">
                                <input type="text" ref={name}  className="form-control" id="inputName" placeholder="Full Name" />
                                </div>
                            </div>                            
                            <div className="form-group row">
                                <label for="inputNumber" className="col-sm-3 col-form-label">Mobile</label>
                                <div className="col-sm-9">
                                <input type="text"  ref={mobile} className="form-control" id="inputNumber" placeholder="Number " />
                                
                                </div>
                            </div>
                            
                            <div className="form-group row">
                                <label for="inputAddress" className="col-sm-3 col-form-label">Address</label>
                                <div className="col-sm-9">
                                <textarea ref={address} className="form-control" id="inputAddress" placeholder=" " />
                                </div>
                            </div>
                            
                            <div className="form-group row">
                                <label className="col-sm-3" for="inputLandmark">Landmark</label>
                                <div className="col-sm-9">
                                <input type="text"  ref={Landmark} className="form-control" id="inputLandmark" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" for="inputState">Locality</label>
                                <div className="col-sm-9">
                                <input type="text" ref={Locality} className="form-control" id="inputlocatlity"  />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" for="inputState">City</label>
                                <div className="col-sm-9">
                                <input type="text" ref={city}  className="form-control" id="inputcity"  />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" for="inputState">State</label>
                                <div className="col-sm-9">
                                <input type="text" ref={state} className="form-control" id="inputstate" />
                                </div>
                            </div>
                            <div className="savechanges">
                            <button type="button" onClick={()=>addaddress()}>Save Changes</button>
                        </div>
                </form>
                
            </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default Address
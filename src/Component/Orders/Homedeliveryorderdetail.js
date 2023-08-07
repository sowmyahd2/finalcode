import React from 'react'
import '../Profile/Profile.css';
import Shopdetail from './Shopdetail';

import { useSelector } from 'react-redux';

const Homedeliveryorderdetails= (props) => {
    const orderdetail=props.orderdetail;
    const shops=props.shopdetail;
      
     
   
    
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
                <div className="departmentname">

                <p>{data.ProductName}</p>
                <img className="imagesproduct" src={data.thumb_image} alt="Product" />
            
            </div>    
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


export default Homedeliveryorderdetails
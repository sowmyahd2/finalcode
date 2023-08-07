import React from 'react'
import { Link } from 'react-router-dom';

const Orderdetailpage=({order})=>{
  return (
    <> <div className="dealslayout col-lg-12 col-md-12 col-sm-12 col-12">
        
      
       
        <div className="departmentname">
    
        <p>{order.ProductName}</p>
        <img className="imagesproduct" src={order.thumb_image} alt="Product" />
        <p>{order.pick_id}/{order.orderid}</p>
        <p>{order.status}</p>
        <p>{order.pmode ==0 ?"Pay At Store " :"online"}</p>
        <p>{order.PayablePrice}</p>
    </div>    
        
 
</div> 
</>
  )
}



export default Orderdetailpage

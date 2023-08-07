import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Homedeliveryorder = (props) => {
    const orders=props.orders;
  return (
    <div> {  orders.map(link => 
  
        <div className="row">
           
                  
                  
           <Link to ={"/Homeorderdetail/"+props.city+"/"+link.PS_OrderId}>View Detail
            </Link>  
                   <img className="imagesproduct" src={link.thumb_image} alt="Product" />
                   
                   <p>{link.ProductName}</p>
                   <p>{link.ProductCode}</p>
                   <p>{link.status}</p>
                        </div>
)}  </div>
  )
}



export default Homedeliveryorder
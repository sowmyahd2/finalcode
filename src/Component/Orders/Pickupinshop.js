import React, {useEffect, useState} from 'react'
import './orders.css';

import { Link } from 'react-router-dom';

const Pickupinshop = (props) => {
   
      
    return(
        <div className="dealslayout col-lg-12 col-md-12 col-sm-12 col-12">
        
      
       
            <div className="departmentname">
            <Link to ={props.link}>View Detail
            </Link>   
                <p>{props.name}</p>
                <img className="imagesproduct" src={props.image} alt="Product" />
            </div>    
                
         
    </div> 
    )
}

export default Pickupinshop;
import React from 'react';
import './CauroselItem.css'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Cauroselitemstore = (props) => {
    return(

        
            <div className="productlayout m-1">
            <Link to={props.link}  style={{ textDecoration: 'none' }}> 
            <div className="productimage">
                <LazyLoadImage width="auto" height="auto" effect='blur' className="imageproduct" onError={event => {
          event.target.src = "https://cityonnet-virtualmall.s3.ap-southeast-1.amazonaws.com/preloader.gif"
          event.onerror = null
        }} src={props.image} alt="images"/>
            </div>
            <div className="producttext ">
                <p>{props.name}</p>
            </div>                  
            </Link>
        </div>
           
            
    )
}

export default Cauroselitemstore ;
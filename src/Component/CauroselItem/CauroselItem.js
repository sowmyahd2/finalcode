import React from 'react';
import './CauroselItem.css'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const CauroselItem = (props) => {
    return(

        <div className="productlayout m-1">
            <Link to={props.link}  style={{ textDecoration: 'none' }}> 
            <div className="productimage">
                <LazyLoadImage width="auto" height="auto" effect='blur' className="imageproduct" onError={event => {
          event.target.src = "https://www.cityonnet.com/images/preloader.gif"
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

export default CauroselItem ;
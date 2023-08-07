import React from 'react';
import './CauroselItem.css'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Cauroselitembrand = (props) => {
    return(

        <div className="brandlayout">
            <Link to={props.link}> 
            <div className="brandimage">
                <LazyLoadImage width="auto" height="auto" effect='blur' className="imageproduct" onError={event => {
          event.target.src = "https://www.cityonnet.com/images/preloader.gif"
          event.onerror = null
        }} src={props.image} alt="images"/>
            </div>
            <div className="brandtext ">
                <p>{props.name}</p>
            </div>                 
            </Link>
        </div>
    )
}

export default Cauroselitembrand ;
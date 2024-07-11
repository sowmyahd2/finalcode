import React from 'react';
import './CauroselItem.css'
import { Link } from 'react-router-dom';
import { image } from '../../data/images';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Cauroselitemproduct = (props) => {
    return(

        <div className="productlayout m-1">
            <Link to={props.link}  style={{ textDecoration: 'none' }}> 
            <div className="productimage">
                <LazyLoadImage effect='blur' className="imageproduct"  onError={event => {
          event.target.src = image[0].ImageId
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

export default Cauroselitemproduct ;
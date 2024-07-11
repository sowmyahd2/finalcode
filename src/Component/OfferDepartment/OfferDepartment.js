import React from 'react'
import './OfferDepartment.css';
import { Link } from 'react-router-dom';
import { image } from '../../data/images';
import { depart } from '../../data/Departmetnt';
import { LazyLoadImage } from 'react-lazy-load-image-component';
console.log(depart);
const OfferDepartment = (props) => {
    return(
        
                   <div className="offerlayout col-lg-3 col-md-3 col-sm-4 col-6">
                        <div className="dealslayout">
                        <Link to ={props.link}> <div className="departmentimage col-lg-3 col-md-3 col-sm-4 col-6">
                        <LazyLoadImage effect='blur' className="imageproduct"  onError={event => {
          event.target.src = image[0].ImageId
          event.onerror = null
        }} src={props.image} alt="images"/>
                            </div>
                            <div className="departmentname ">
                                <p>{props.name}</p>
                            </div>   </Link>         
                        </div>      
                    </div> 
                   
                
    )
}

export default OfferDepartment;
import React from 'react'
import './OfferDepartment.css';
import { Link } from 'react-router-dom';

const OfferDepartment = (props) => {
    return(
        
                   <div className="offerlayout col-lg-2 col-md-3 col-sm-4 col-6">
                        <Link to ={props.link}> <div className="dealslayout">
                        <div className="departmentimage col-lg-3 col-md-3 col-sm-4 col-6">
                                <img className="imageoffer" onError={event => {
          event.target.src = "https://www.cityonnet.com/images/preloader.gif"
          event.onerror = null
        }} src={props.image} alt="offers" />
                            </div>
                            <div className="departmentname ">
                                <p>{props.name}</p>
                            </div>         
                        </div>      </Link>
                    </div> 
                   
                
    )
}

export default OfferDepartment;
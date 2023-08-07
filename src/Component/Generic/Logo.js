import React from 'react'
import './Generic.css';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Logo = () => {
    return(
        <>
                <div className="logo col-6 d-block -md-none">
        <Link to="/"><LazyLoadImage width="90px" height="313px" src={require('../../../src/images/picklogo.jpg')} alt="price,availability,store"/></Link>
        </div>
        
        
        </>
    )
}

export default Logo;
import React from 'react';
import './Product.css';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

const ProductTittle = (props) => {
    return(
        <div className="container-fluid producttittle my-2">
            <div className="row">
                <div className="categorytittle col-9 col-xs-8">
                    <h6>{props.title}</h6>
                </div>
                <div className="viewall col-3 col-xs-4">
                   <Link to={props.link}> <h6>View All</h6></Link>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default ProductTittle;
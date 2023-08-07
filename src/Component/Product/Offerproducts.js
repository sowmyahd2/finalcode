import React from 'react'
import './Product.css';
import { Link } from 'react-router-dom';

const Offerproducts = (props) => {
    const percentage=  (Math.round(props.product.MRP) -Math.round(props.product.StorePrice) )/Math.round(props.product.MRP);
    const per=Math.round(percentage*100);
    return(
        
        <div className="productslayout col-lg-3 col-md-3 col-sm-3 col-6">
            <span className="offerpercentage">{per}%</span>
        <Link to={`/productdetails/${props.product.ProductId}`}>
            <div className="productsimage">
                <img className="imagesproduct" src={props.product.medium_image} alt="Product" />
            </div>
            
            <div className="productstext ">
                <p>{props.product.ProductName}</p>
            </div>
            </Link>
            <div className="productsdetails">
         
                <p className="mrpprice">{props.product.MRP}</p> 
                <p className="sellingprice"><i class="fas fa-rupee-sign"></i> {props.product.SellingPrice}</p>
                <p className="storeprice">In Store <i class="fas fa-rupee-sign"></i> {props.product.StorePrice}</p>
                
            </div>  
                              
        </div>
    )
}

export default Offerproducts;
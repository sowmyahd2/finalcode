import React from 'react'
import './Product.css';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Product = (props) => {
    return(
        
        <div className="productslayout col-lg-3 col-md-3 col-sm-3 col-6">
        <Link to={`/productdetails/${props.product.ProductId}`}>
            <div className="productsimage">
               
                <LazyLoadImage width="auto" height="auto" effect='blur' className="imageproduct" onError={event => {
          event.target.src = "https://www.cityonnet.com/images/preloader.gif"
          event.onerror = null
        }} src={props.product.medium_image} alt="product"/>
            </div>
            
            <div className="productstext ">
                <p>{props.product.ProductName}</p>
            </div>
            </Link>
            <div className="productsdetails">
         
                <p className="mrpprice">{props.product.MRP}</p> 
                <p className="sellingprice"><i class="fas fa-rupee-sign"></i> {props.product.SellingPrice}</p>
                <p className="storeprice">In Store <i class="fas fa-rupee-sign"></i> {props.product.StorePrice}</p>
                {props.product.ShopCount ?
                <p className="ndealers">Dealers<span>({props.product.ShopCount})</span></p>
            
            :""}</div>  
                              
        </div>
    )
}

export default Product;
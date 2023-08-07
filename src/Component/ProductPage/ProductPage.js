import React from 'react'
import './ProductPage.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Sticky from 'react-sticky-el';
import { useSelector, useDispatch } from 'react-redux';
import{pathOr, path} from 'ramda';
import ProductSpecification from '../ProductPage/ProductSpecification';
import ProductTable from '../ProductPage/ProductTable';
import { Redirect, useHistory } from "react-router"; 
import { addtowishlist } from '../../Redux/Action/ProductAction';
import { useParams } from 'react-router-dom';


const Productpage = () => { 
    const productDetails = useSelector(state => state.Product.productDetails);
    const availableSize = useSelector(state => pathOr([],["availableSize"],state.Product.productDetails));    
    const productImage = useSelector(state => pathOr({},["images"],state.Product.productDetails));    
    const city = useSelector(state => state.UserPreference.city)
    const user = useSelector(state => state.Login)
    const userId = pathOr("", ["user", "UserId"], user);
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const addwishlist = () => {
   
        if (userId == "") {
            history.replace('/login')
        } else {
            
           dispatch(addtowishlist(userId, id,city))
       
     
        }

    }
    const selectprice=(size)=>{

        alert(size);
    }
    return(
        <>
        <div className="productpagelayout col-lg-12 col-md-12 col-sm-12 col-12 my-0">
            <div className="container-fliud">
                <div className="row stickyend">         
                <div className="productsticky  col-lg-5 col-md-6 col-sm-12 col-12">       
                <Sticky stickyClassName="stickyproduct"  boundaryElement=".stickyend" >
                    <div className="productpageimage">                   
                        <Carousel>
                            <div className="cauroselimage">
                                <img className="img-responsive" src={pathOr("",["image1","zoom_image"],productImage)} className="imagecaurosel" />
                            </div>
                            <div className="cauroselimage">
                                <img className="img-responsive" src={pathOr("",["image2","zoom_image"],productImage)} className="imagecaurosel" />
                            </div>
                            <div className="cauroselimage">
                                <img className="img-responsive" src={pathOr("",["image3","zoom_image"],productImage)} className="imagecaurosel" />
                            </div>
                            <div className="cauroselimage">
                                <img className="img-responsive" src={pathOr("",["image4","zoom_image"],productImage)} className="imagecaurosel" />
                            </div>
                        </Carousel>
                        <div className="buttonproduct col-12">
                            <div className="addtocart col-lg-5 col-md-5 col-sm-6 col-12"><span>Pickupinstore </span></div>
                            <div className="buynow col-lg-5 col-md-5 col-sm-6 col-12"><span>Homedelivery</span></div>
                        </div>
                    
                    </div> 
                    </Sticky> 
                    </div>
                    <div className="productpagedetails col-lg-7 col-md-6 col-sm-12 col-12">
                        <div className="detailsproduct col-12">
                            <h6>{pathOr("",["productdetail","ProductName"], productDetails)}</h6>
                            <hr className="producthorizontal" />
                            <p className="concode">CON Code : {pathOr("",["productdetail","ConCode"], productDetails)}</p>
                            <p className="productcode">Product Code : {pathOr("",["productdetail","ProductCode"], productDetails)}</p>
                        </div>
                        <hr className="producthorizontal" />
                        <div className="ratings col-lg-6 col-md-6 col-sm-6 col-12">
                            <h6>4.5 <i class="fas fa-star"></i></h6> <span>4,697 Ratings and 653 Reviews</span>
                        </div>
                        <div className="socialproduct col-12">
                            <div className="wishcomemail col-lg-6 col-md-6 col-sm-6 col-12">
                                <h6>Whishlist | Comapre | Email :</h6>
                                <p onClick={()=>addwishlist()}><i class="fas fa-heart"></i> | <i class="fas fa-sync"></i> | <i class="fas fa-envelope"></i></p>
                            </div>
                            <div className="shareproduct col-lg-6 col-md-6 col-sm-6 col-12">
                                <h6>Share with Us</h6>
                                <p><i class="fab fa-facebook-square"></i> <i class="fab fa-twitter-square"></i> <i class="fab fa-google-plus-square"></i> <i class="fab fa-pinterest-square"></i></p>
                            </div>
                        </div>                   

                        <hr className="producthorizontal" />
                        <div className="productpricepin col-12 my-3">    
                            <div className="productrupee col-12">                                                           
                                <p className="itemprice"><i class="fas fa-rupee-sign"></i>. {pathOr("",["productdetail","LowestSellingPrice"], productDetails)} </p>
                                <p className="discountprice"><i class="fas fa-rupee-sign"></i>. {pathOr("",["productdetail","MRP"], productDetails)} </p>
                                <span>50% off</span>
                            </div> 
                            {availableSize.length > 0 &&
                            <div className="availablesize">
                                <select onChange={(event) => selectprice(event.target.value)}>
                                    <option value=''>Select available size</option>
                                {
                                availableSize.map((data,index)=>{
                                    return(
                                        <option value={data.SpecificationValue}>{data.SpecificationValue}</option>
                                    )
                                })
                                }
                                </select>
                                
                                </div>         }                    
                        </div> 
                         
                        <hr className="producthorizontal" />
                        <div className="productresource col-12 my-4">
                            <div className="delivery col-2">
                                <h6>Delivery:</h6>
                            </div>
                            <div className="pincode col-10">
                                <h6>Enter Pincode To Check Delivery</h6>
                                <p><input type="text" placeholder="Enter Pincode"></input> <button>Check</button> </p>
                                <p>Usually delivered in3-4 days?</p>
                                <p>Enter pincode for exact delivery dates/charges</p>
                                <p>View Details</p>
                            </div>
                        </div> 
        


                       
                        <hr className="producthorizontal" />
                        <div className="facilityproduct col-12">
                            <div className="pvir col-6">
                                <ul className="list-group">
                                <li>PAY ONLINE</li>
                                <li>PICK UP IN SHOP ™</li>
                                <li>PAY AT STORE ™</li>
                                <li>TOUCH-FEEL N BUY™</li>
                            </ul>
                            </div>
                            <div className="secure col-6">
                            <img src="https://www.cityonnet.com/images/sec.jpg" />
                            </div>
                        </div>
                        <hr className="producthorizontal" />
                                <ProductSpecification />
                                
                            
                    </div>
                    <br/>
                </div>

               
                <div className="container-fliud  producttabb">
                    <div className="row"> 
                        <ProductTable />
                    </div>
                </div>
            
            </div>
            </div>
        

        </>
    )
}

export default Productpage;
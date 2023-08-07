import React, {useEffect} from 'react';
import './StoreFront.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';




const StoreFront = (props) => { 
    const { DealerId } = useParams();
        const dispatch = useDispatch();
        const city = useSelector(state => state.UserPreference.city)
        
    const shopPageDetail = props.detail
    
    const shopPageBanner = () => {
        return "https://cityonnet-virtualmall.s3.amazonaws.com/StoreInfo/"+city+"/"+DealerId+".png"
    }
    return(
        <>
        <div className="storefront my-2">            
            <div className="container-fluid">
                <div className="row ">  
                    <div className="shoptranparent col-12">
                        <div className="shoplogoname col-12">
                            <div className="storefrontlogo col-2">
                                <img className="img-fluid bannershoplogo" src={'https://s3-ap-southeast-1.amazonaws.com/cityonnet-virtualmall/'+shopPageDetail.ShopLogo}/>
                            </div>
                            <div className="shopfrontname col-10">
                                <h6>{shopPageDetail.ShopName}</h6>
                            </div>
                        </div>
                        <div className="storefrontbanner col-12">
                            <img className="img-fluid storebanner" src={shopPageBanner()} />
                        </div>
                        
                        <div className="storeoverlaybanner col-lg-9 col-md-11 d-none d-md-block">
                            <div className="container-fluid ">
                                <div className="row "> 
                                    <div className="storelogodetail col-lg-2 col-md-2" >                            
                                        <center>
                                        <p className="shoprating"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></p>
                                        <p className="shoplocate"><i className="fas fa-map-marker-alt" /> Locate on Map</p>
                                        <p className="shoptime"><p className="shoppickup">Pickup In Shop™ </p>
                                        <p className="shopopenclose">OPEN</p></p>
                                        </center>
                                    </div>
                                    <div className="storeaddress col-lg-9 col-md-9">
                                        <p className="shopoonline"> <i class="fas fa-shopping-cart"></i> Shop Open Online 24/7, 365 Days    </p>
                                        <p className="shoptimings"> <i class="fas fa-clock"></i> <span>Pickup In Shop™ Timings :</span>{shopPageDetail.ShopTimings}</p>                                
                                        <p className="shoppayment"> <i class="fas fa-credit-card"></i> <span>Payment Methods :</span>Upi {shopPageDetail.PaymentOption}</p>
                                        <p className="shopdelivery"> <i class="fas fa-truck"></i> <span>Delivery :</span> Intracity : Sameday / Nextday : <span>Intercity :</span> 5-7 Days</p>
                                        <p className="shopaddress"> <i class="fas fa-address-card"></i> <span>Address:</span> {shopPageDetail.Locality}</p>
                                        <p className="shopaddress"> <i class="fas fa-address-card"></i> <span>In-store Shopping In-store Pickup Pickupinstore Delivery</span></p>
                                        <p className="shopviewno"> <i class="fas fa-phone"></i> <span>View Number</span></p>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                        <div className="storeinfomobileview  col-12 d-block d-md-none">
                            <div className="mobileratingstore"> Ratings: <p className="shoprating"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></p>
                                        </div>
                                        <hr className="producthorizontal" />
                            <Tabs className="tabsimage">
                                <TabList  className="tabbackground">               
                                    <Tab><i className="fas fa-map-marker-alt"> </i></Tab>
                                    <Tab><i class="fas fa-phone"></i></Tab>
                                    <Tab><i class="fas fa-clock"></i></Tab>
                                    <Tab><i class="fas fa-address-card"></i></Tab>
                                    <Tab><i class="fas fa-truck"></i></Tab>
                                   
                                </TabList>

                                <TabPanel className="detailsinfostore">
                                <p>{shopPageDetail.Locality}</p>
                                <p>Shop Open Online 24/7, 365 Days</p>
                                <p className="shopopenclose">OPEN</p>
                                </TabPanel>
                                <TabPanel className="detailsinfostore">
                                <p className="">{}</p>
                                </TabPanel>
                                <TabPanel>
                                <p className="pickxs">Pickup In Shop™ Timings : {shopPageDetail.ShopTimings} </p>      
                                </TabPanel>
                                <TabPanel className="detailsinfostore">                               
                                <p className="">Payment Methods : {shopPageDetail.PaymentOption}</p>
                                </TabPanel>
                                <TabPanel className="detailsinfostore">
                                <p className="">Delivery : Intracity : Sameday / Nextday : Intercity : 5-7 Days</p>
                                </TabPanel>
                                
                            </Tabs>

  
                        </div>
                        <div className="marqueestorefront"></div>

                    </div>
                </div>
            </div>
            
        </div>

        </>
    )
}

export default StoreFront;
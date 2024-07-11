import React,{useEffect} from 'react'

import Header from '../Component/Header/Header';

import Footer from '../Component/Footer/Footer';


 
const Contactus = () => {
     
    
    return(
        <>
        <Header />
        <div className="container-fluid">
        <div className="row">
            <div className="brandcategorylayout col-lg-2 d-none d-lg-block">    
            <img src="https://www.cityonnet.com/images/contactus.jpg" />
            
            </div>
            </div>
            <div className="row">
        <div className="brandcategorybanner col-lg-4 col-md-6 col-sm-6 col-12 my-2">
        <strong>Contact Us</strong>
<br/>
Call Us :
We Are Available Between 10am To 6pm (Mon-Fri)

Ph:0821-4266909
        </div>
        <div className="brandcategorybanner col-lg-4 col-md-6 col-sm-6 col-12 my-2">
        <strong>Mail Us :</strong>
        <br/>
CityontheNet Marketplace Services Pvt Ltd
#108, 3rd Cross, 9th Main,
Saraswathipuram,
Mysore-570009
Karnataka, India.

Email id : admin@cityon.net
        </div>
        <div className="brandcategorybanner col-lg-4 col-md-6 col-sm-6 col-12 my-2">
        <strong>Corporate Address :</strong>
        <br/>
CityontheNet Marketplace Services Pvt Ltd
#108, 3rd Cross, 9th Main,
Saraswathipuram,
Mysore-570009
Karnataka, India.

        </div>  
        <p>Come We Are At : #108, 3rd Cross, 9th Main, Saraswathipuram, Mysore-570009</p>
        
        </div>
        </div>
<Footer/>
        </>
    )
}

export default Contactus;
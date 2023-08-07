import React,{useEffect} from 'react'
import './CommonContainer.css';
import Header from '../Component/Header/Header';

import Footer from '../Component/Footer/Footer';


 
const Aboutus = () => {
   
    
    return(
        <>
        <Header />
        <div className="container-fluid" style={{padding:"10px"}}>
        <div className="row">
            <div className="brandcategorylayout col-lg-2 d-none d-lg-block">    
            <img src="https://cityonnet-virtualmall.s3-ap-southeast-1.amazonaws.com/Homepage+Images/hmeban.png" />
            
            </div>
            </div>
            <div className="row">
        <div className="brandcategorybanner col-lg-10 col-md-12 col-sm-12 col-12 my-2">
      <h3> About Us</h3> 
      <br/>
<article>
CityonNet.Com Is India's First Omnichannel Marketplace That Provides Visibility To Products At Stores In Your City. More Than A Million Stores Across 640 Cities Are Getting Ready To Showcase Their Virtual Stores To Enable Users To View Online, Pickup In Store™, Buy At Store® Or Pay At Store™.
</article>
<article>CityonNet.Com Is Also The 'First Port Of Call' For Brands To Give Visibility To Their Products, New Arrivals And Discounts Across Their Network Of Partner Stores And MBO's.
</article>
<article>
So The Next Time You Think Of Shopping, Check Out What Is Available In Stores. Many Times You Would Be Surprised That You May Be Getting A Very Good Deal At The Nearby Store With The Added Luxury Of Touch Feel N Buy And Friendly Store Owner.
</article>
<article>
CityonNet.Com Was Born On The Premise That More Than 96% Of Consumption Happens At Stores In The Same City In Which We Live And Given The Proliferation Of Smart Phones, The Digitization Of The Stores Was A Natural Extension.
</article>
<article>
BCG Estimates That The Digitally Influenced Consumption (Check Online, Pickup In Store) Is Worth $500 Billion In Market Size.
</article>
<h3>Let Us Now Create 'The Future Of Your Retail Store™'</h3>
        </div>
        
        </div>
        </div>
<Footer/>
        </>
    )
}

export default Aboutus;
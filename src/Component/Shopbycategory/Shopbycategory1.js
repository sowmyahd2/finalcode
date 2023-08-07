import React, { Component } from "react";
import './Shopbycategory.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Shopbycategory1 = () => {

    const setting = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
    return(
        <div className="mostviewed col-12 px-0">
            <div className="mostviewheading px-0 mx-0">
            <div className="py-0 shopbybanner"><img src={require('../../../src/images/footwearbanner.jpg')} width="100%"/></div>
            </div>
            <Slider className="" {...setting}>
                <div className="productlayout">
                  <div className="productimage">
                    <img className="imageproduct" src="https://d1mmws0cero5pr.cloudfront.net/D2/M6/S91/medium/image1/1128434_image1.jpg" />
                  </div>
                  <div className="producttext ">
                    <p>Purple Shoes For Kids</p>
                  </div>
                  <div className="productdetails">
                  </div>                    
                </div>
                <div className="productlayout">
                  <div className="productimage">
                    <img className="imageproduct"  src="https://d1mmws0cero5pr.cloudfront.net/D2/M6/S91/medium/image1/1128441_image1.jpg" />
                  </div>
                  <div className="producttext">
                    <p>Black Shoes For Kids</p>
                  </div>
                  <div className="productdetails">
                  </div>                    
                </div>
                <div className="productlayout">
                  <div className="productimage">
                    <img className="imageproduct"  src="https://d1mmws0cero5pr.cloudfront.net/D2/M5/S75/medium/image1/1127230_image1.jpg" />
                  </div>
                  <div className="producttext">
                    <p>Brown Chappals For Men</p>
                  </div>
                  <div className="productdetails">
                  </div>                    
                </div>
                <div className="productlayout">
                  <div className="productimage">
                    <img className="imageproduct"  src="https://d1mmws0cero5pr.cloudfront.net/D2/M5/S78/medium/image1/1127364_image1.jpg" />
                  </div>
                  <div className="producttext">
                    <p>Brown Sandals For Women</p>
                  </div>
                  <div className="productdetails">
                  </div>                    
                </div>
                <div className="productlayout">
                  <div className="productimage">
                    <img className="imageproduct" src="https://d1mmws0cero5pr.cloudfront.net/D2/M6/S91/medium/image1/1128434_image1.jpg" />
                  </div>
                  <div className="producttext ">
                    <p>Purple Shoes For Kids</p>
                  </div>
                  <div className="productdetails">
                  </div>                    
                </div>
                <div className="productlayout">
                  <div className="productimage">
                    <img className="imageproduct"  src="https://d1mmws0cero5pr.cloudfront.net/D2/M6/S91/medium/image1/1128441_image1.jpg" />
                  </div>
                  <div className="producttext">
                    <p>Black Shoes For Kids</p>
                  </div>
                  <div className="productdetails">
                  </div>                    
                </div>
                <div className="productlayout">
                  <div className="productimage">
                    <img className="imageproduct"  src="https://d1mmws0cero5pr.cloudfront.net/D2/M5/S75/medium/image1/1127230_image1.jpg" />
                  </div>
                  <div className="producttext">
                    <p>Brown Chappals For Men</p>
                  </div>
                  <div className="productdetails">
                  </div>                    
                </div>
                <div className="productlayout">
                  <div className="productimage">
                    <img className="imageproduct"  src="https://d1mmws0cero5pr.cloudfront.net/D2/M5/S78/medium/image1/1127364_image1.jpg" />
                  </div>
                  <div className="producttext">
                    <p>Brown Sandals For Women</p>
                  </div>
                  <div className="productdetails">
                  </div>                    
                </div>
                   
            </Slider>
        </div>
    )
}

// https://react-slick.neostack.com/docs/example/responsive/
export default Shopbycategory1;
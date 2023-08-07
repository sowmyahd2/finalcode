import React, { Component } from "react";
import './Shopbycategory.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Shopbycategory = () => {

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
            <div className="py-0 shopbybanner"><img src={require('../../../src/images/Apparelsbanner.jpg')} width="100%"/></div>
            </div>
            <Slider className="" {...setting}>
                <div className="productlayout">
                  <div className="productimage">
                    <img className="imageproduct" src="https://d1mmws0cero5pr.cloudfront.net/D1/M1/S27/medium/image1/1002269_image1.jpg" />
                  </div>
                  <div className="producttext ">
                    <p>Womens Satin Designer Unstitched Dress Material</p>
                  </div>
                  <div className="productdetails">
                  </div>                    
                </div>
                <div className="productlayout">
                  <div className="productimage">
                    <img className="imageproduct"  src="https://d1mmws0cero5pr.cloudfront.net/D1/M1/S27/medium/image1/1002270_image1.jpg" />
                  </div>
                  <div className="producttext">
                    <p>Womens Tussar Silk Designer Unstitched Anarkali Dress Material</p>
                  </div>
                  <div className="productdetails">
                  </div>                    
                </div>
                <div className="productlayout">
                  <div className="productimage">
                    <img className="imageproduct"  src="https://d1mmws0cero5pr.cloudfront.net/D1/M1/S27/medium/image1/1002267_image1.jpg" />
                  </div>
                  <div className="producttext">
                    <p>Womens Silk Designer Unstitched Anarkali Dress Material</p>
                  </div>
                  <div className="productdetails">
                  </div>                    
                </div>
                <div className="productlayout">
                  <div className="productimage">
                    <img className="imageproduct"  src="https://d1mmws0cero5pr.cloudfront.net/D1/M1/S27/medium/image1/1002320_image1.jpg" />
                  </div>
                  <div className="producttext">
                    <p>Womens Zari Work Anarkali Suit</p>
                  </div>
                  <div className="productdetails">
                  </div>                    
                </div>
                <div className="productlayout">
                  <div className="productimage">
                    <img className="imageproduct" src="https://d1mmws0cero5pr.cloudfront.net/D1/M1/S27/medium/image1/1002269_image1.jpg" />
                  </div>
                  <div className="producttext ">
                    <p>Womens Satin Designer Unstitched Dress Material</p>
                  </div>
                  <div className="productdetails">
                  </div>                    
                </div>
                <div className="productlayout">
                  <div className="productimage">
                    <img className="imageproduct"  src="https://d1mmws0cero5pr.cloudfront.net/D1/M1/S27/medium/image1/1002270_image1.jpg" />
                  </div>
                  <div className="producttext">
                    <p>Womens Tussar Silk Designer Unstitched Anarkali Dress Material</p>
                  </div>
                  <div className="productdetails">
                  </div>                    
                </div>
                <div className="productlayout">
                  <div className="productimage">
                    <img className="imageproduct"  src="https://d1mmws0cero5pr.cloudfront.net/D1/M1/S27/medium/image1/1002267_image1.jpg" />
                  </div>
                  <div className="producttext">
                    <p>Womens Silk Designer Unstitched Anarkali Dress Material</p>
                  </div>
                  <div className="productdetails">
                  </div>                    
                </div>
                <div className="productlayout">
                  <div className="productimage">
                    <img className="imageproduct"  src="https://d1mmws0cero5pr.cloudfront.net/D1/M1/S27/medium/image1/1002320_image1.jpg" />
                  </div>
                  <div className="producttext">
                    <p>Womens Zari Work Anarkali Suit</p>
                  </div>
                  <div className="productdetails">
                  </div>                    
                </div>
                   
            </Slider>
        </div>
    )
}

// https://react-slick.neostack.com/docs/example/responsive/
export default Shopbycategory;
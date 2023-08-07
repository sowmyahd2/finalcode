import React, { Component } from "react";
import './Caurosel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cauroselitemstore from "../CauroselItem/Cauroselitemstore";
import { Link } from 'react-router-dom';

const Cauroselstore = (props) => {

    const setting = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        lazyLoad: true,
        focusOnSelect: true,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
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
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };
    
    return(
        <div className="mostviewed col-12">
            <div className="mostviewheading">
            
            {props.store && (
              <h5>Most Viewed Stores</h5>
            )}
            </div>
            <Slider className="sliderlayoutcauroselstore" {...setting}>                
                {props.store && props.data.map((data,index)=>{
                  return(
                    <Cauroselitemstore name={data.ShopName} image={data.ShopLogo} Dealerid={data.DealerId} locality={data.Locality} key={index} link={"/shoppage/"+data.DealerId} />)
                  
                })} 
            </Slider>
        </div>
    )
}

// https://react-slick.neostack.com/docs/example/responsive/

export default Cauroselstore;
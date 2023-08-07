import React, { Component } from "react";
import './Caurosel.css';

import Slider from "react-slick";
import Cauroselitemproduct from "../CauroselItem/Cauroselitemproduct";
import { Link } from 'react-router-dom';

const Caurosel = (props) => {

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
            {props.product && (
              <h5>Most Viewed Products</h5>
            )}
            </div>
            <Slider className="sliderlayoutcaurosel" {...setting}>
                {props.product && props.data.map((data,index)=>{
                  return(
                    <Cauroselitemproduct name={data.ProductName} image={data.medium_image} productId={data.ProductId} key={index} link={"/productdetails/"+data.ProductId} /> )
                  
                })}
            </Slider>
        </div>
    )
}

// https://react-slick.neostack.com/docs/example/responsive/
export default Caurosel;
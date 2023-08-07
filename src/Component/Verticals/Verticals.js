import React from "react"
import './Vertical.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../Redux/Action/DrawerAction";


var links = [
  {"KEY":0, "link":"/department/category/1","name":"Shop by Products","image":"https://cityonnet-virtualmall.s3.ap-southeast-1.amazonaws.com/Homepage_Vertical_Images/Shopbyproducts.webp"},
  {"KEY":1, "link":"#","name":"Shop by Brands","image":"https://cityonnet-virtualmall.s3.ap-southeast-1.amazonaws.com/Homepage_Vertical_Images/Shopbybrands.webp"},
  {"KEY":2, "link":"#","name":"Shop at Stores","image":"https://cityonnet-virtualmall.s3.ap-southeast-1.amazonaws.com/Homepage_Vertical_Images/Shopbystores.webp"},
  {"KEY":3, "link":"/newarrivals","name":"New Arrivals","image":"https://cityonnet-virtualmall.s3.ap-southeast-1.amazonaws.com/Homepage_Vertical_Images/Newarrivals.webp"},
  {"KEY":4, "link":"/deals","name":"Deals & offer","image":"https://cityonnet-virtualmall.s3.ap-southeast-1.amazonaws.com/Homepage_Vertical_Images/Dealsandoffers.webp"},
  {"KEY":5, "link":"","name":"Near By You","image":"https://cityonnet-virtualmall.s3.ap-southeast-1.amazonaws.com/Homepage_Vertical_Images/Nearbyyou.webp"},
  ];
  

const Vertical = () => {

    const dispatch = useDispatch();
    const drawer = useSelector(state => state.drawer);

    return(
        
        <div className="verticals col-lg-12 col-md-12 col-sm-12 col-12 "> 
            <div className="row row-cols-lg-6 row-cols-md-6 row-cols-sm-3 row-cols-3 mx-0">
             {links.map(link =><div className="figlayout mx-0 " key={link.KEY}> <figure className="figure col figtag" onClick={()=>dispatch(toggleDrawer(drawer,link.KEY))}>
               <Link to={link.link}>  <img width="388px" height="232px" src={link.image} className="figure-img" alt={link.name} />
                        <figcaption className="figure-caption text-center" >{link.name}</figcaption></Link>
                    </figure>        
                </div>
                )
              }
                
            </div>
          </div>  
        
       
    )
}

export default Vertical;
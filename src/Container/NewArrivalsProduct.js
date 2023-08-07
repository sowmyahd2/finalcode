import React, {useEffect} from 'react';
import './CommonContainer.css';
import Header from '../Component/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Product from '../Component/Product/Product';
import {getNewArrivalsProducts} from '../Redux/Action/NewArrivalsAction'



const NewArrivalsProduct = () => {
    const {DepartmentId, BrandId}= useParams();
    const dispatch = useDispatch();
    const city = useSelector(state => state.UserPreference.city)
    useEffect(()=>{
        dispatch(getNewArrivalsProducts(city,DepartmentId,BrandId))

    })
    const newarrivalsbanner = () => {
        return "https://s3-ap-southeast-1.amazonaws.com/cityonnet-virtualmall/brandcategorybanners/"+DepartmentId+"/"+BrandId+".png"
    }
    const arrivalsProduct = useSelector(state => state.NewArrivals.newArrivalsProducts);
    
    return(

        <>
        <Header />
        <div className="newarrivalslayout ">
            <div className="container-fluid my-2">
                <div className="row">
                    <div className="offerdetailsbanner col-12">
                        <img className="img-fluid" src={newarrivalsbanner()} width="100%" alt=""/>
                    </div>              
                    <div className="newarrivalsproduct col-12">
                        <div className="container-fluid my-2">
                            <div className="row">
                                {arrivalsProduct.map((data,index) => {
                                    return (<Product product={data}  />)
                                    })
                                }
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>

        </>
    )
}
export default NewArrivalsProduct;
import React, {useEffect} from 'react';
import './CommonContainer.css'
import { getBrandOfferDetail } from '../Redux/Action/BrandAction'
import Header from '../Component/Header/Header'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Offerproducts from '../Component/Product/Offerproducts';

const BrandOfferDetail = () => {
    const {DepartmentId, BrandId}= useParams();
    const dispatch = useDispatch();
    const city = useSelector(state => state.UserPreference.city)
    const brandDealsProducts = useSelector(state => state.Brand.brandOfferDetail);
    useEffect(()=>{
        dispatch(getBrandOfferDetail(city,DepartmentId,BrandId))

    })
    const brandofferbanner = () => {
        return "https://s3-ap-southeast-1.amazonaws.com/cityonnet-virtualmall/brandcategorybanners/"+DepartmentId+"/"+BrandId+".png"
    }

    return(
        <>
        <Header />
        <div className="brandofferdetails ">
            <div className="container-fluid my-2">
                <div className="row">
                    <div className="offerdetailsbanner col-12">
                        <img className="img-fluid odbimage" src={brandofferbanner()} alt="banner" width="100%"/>
                                  
                    <div className="offerdetailproducts">
                        <div className="container-fluid my-2">
                            <div className="row">
                                {brandDealsProducts.map((data,index) => {
                                    return (<Offerproducts product={data}  />)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>



        </>
    )
}

export default BrandOfferDetail;
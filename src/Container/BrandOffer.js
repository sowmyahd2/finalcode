import React, {useEffect} from 'react';
import Header from '../Component/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import OfferDepartments from '../Component/OfferDepartment/OfferDepartment';
import { useParams } from 'react-router-dom';

import  {getbrandoffer} from '../Redux/Slice/BrandSlice';
const BrandOffer = () => {
    const {id}= useParams();
    const dispatch = useDispatch();
    const city = "mysore"
    const {branddeals} = useSelector(state => state.brand);

    useEffect(()=>{
        dispatch(getbrandoffer({"selectedcity":city,id:id}))

    },[city,id])

    return(
        <> 
        <Header />
        <div className="container-fluid my-2">
            <p style={{left: "10px"}}><span style={{color:"red"}}>*</span>All brand logos depicted here are registered trademarks and owned by their respective holding companies      </p>
            <div className="row"> 
            {branddeals.map((data,index)=>{
                  return(
                    <OfferDepartments name={data.BrandName} image={data.BrandLogo} key={index} link={"/brandofferdetail/"+id+"/"+data.BrandId} />
                  )
                })}
            </div>
        </div>
        </>
    )
}
export default BrandOffer;
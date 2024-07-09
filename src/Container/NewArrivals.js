import React, {useState, useEffect} from 'react';

import Header from '../Component/Header/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getNewArrivals} from '../Redux/Action/NewArrivalsAction';
import FilterBox from '../Component/FilterBox/FilterBox';
import OfferDepartments from '../Component/OfferDepartment/OfferDepartment';
import { pathOr } from 'ramda';


const NewArrivals = () => {  
    const [id, setId] = useState(1)
    const dispatch = useDispatch();
    const city = useSelector(state => state.UserPreference.city)
    useEffect(() => {
        dispatch(getNewArrivals(city, id))
        
    }, [])
    const ArrivalsFilter = useSelector(state => pathOr([],["department"],state.NewArrivals.newArrivals));
    const Arrivalsbrands = useSelector(state => pathOr([],["brands"],state.NewArrivals.newArrivals));
    
    return(
        <>
        <Header />
        <div className="newarrivals my-2">
            <div className="container-fluid">
                <div className="row">
                    <div className="arrivalsfilter col-2  d-none d-lg-block">
                        {ArrivalsFilter.map((data,index)=>{
                            return(
                                <FilterBox newArrival onClick={()=>{
                                    setId(data.DepartmentId)
                                    dispatch(getNewArrivals(city,data.DepartmentId))
                                }} label={data.DepartmentName} id={data.DepartmentId} key={index}  />
                            )
                        })}   
                    </div>
                    <div className="container-fluid col-12 d-block d-lg-none">
                            <div className="row">
                                <div className="arrivalsfilter col-12 d-block d-lg-none">
                                    <form className="formarrival">
                                        <div class="form-group m-0">
                                            <select class="form-control" id="exampleFormControlSelect1" onChange={(e)=>{
                                    setId(e.target.value)
                                    dispatch(getNewArrivals(city,e.target.value))
                                }}>
                                                
                                                {ArrivalsFilter.map((data,index)=>{
                            return(
                                <option label={data.DepartmentName} id={data.DepartmentId} value={data.DepartmentId}  key={index}>Select A Category</option>
                            )
                        })} 
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> 
                    <div className="arrivalsbrand col-lg-10 col-md-12 col-sm-12 col-12">
                        <div className="container-fluid">
                            <div className="row">
                                {Arrivalsbrands.map((data,index)=>{
                                    return(
                                        <OfferDepartments link={"/newarrivals/products/"+id+"/"+data.BrandId} name={data.BrandName} image={data.BrandLogo} key={index} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default NewArrivals;
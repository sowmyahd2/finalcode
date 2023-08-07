import React from 'react'
import Header from '../Component/Header/Header';
import { useSelector } from 'react-redux';
import OfferDepartments from '../Component/OfferDepartment/OfferDepartment';

const Deals = () => {
    const offerdepartments = useSelector(state => state.Department.department);
    return(
        <>
        <Header />
        <div className="container-fluid px-2 my-2">
            
            {offerdepartments.map((data,index)=>{
                  return(
                    <OfferDepartments name={data.DepartmentName} image={data.Icons} link={"/deals/offers/"+data.DepartmentId} key={index} />
                  )
                })}
            
        </div>
        </> 
    )
} 

export default Deals;
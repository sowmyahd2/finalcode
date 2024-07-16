import React,{useEffect} from 'react'
import Header from '../Component/Header/Header';
import { useSelector,useDispatch } from 'react-redux';

import OfferDepartments from '../Component/OfferDepartment/OfferDepartment';
import { fetchdepartment } from '../Redux/Slice/DepartmentSlice';
const Deals = () => {
    const {departments} = useSelector(state => state.department);
   console.log(departments);
   const dispatch = useDispatch();
   useEffect(()=>{
    dispatch(fetchdepartment());
   },[])
    return(
        <>
        <Header />
        <div className="container-fluid px-2 my-2">
            
            {departments.map((data,index)=>{
                  return(
                    <OfferDepartments name={data.DepartmentName} image={data.Icons} link={"/deals/offers/"+data.DepartmentId} key={index} />
                  )
                })}
            
        </div>
        </> 
    )
} 

export default Deals;
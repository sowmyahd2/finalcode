import React from 'react'
import { useHistory } from 'react-router';
import './BrowseBox.css';


const BrowseByBrands = (props) => {
    const brands=props.brands; 
    const history = useHistory();
    return(
        <>
            <div className="browsebrand col-lg-4 col-md-4 col-sm-6 col-6">
                <select  onChange={(event)=>{console.log(event.target);history.replace('/brandcategory/'+event.target.value)}}>
                    <option>Browse By Brands</option>
                    {brands.map((data,index)=>{
                        return(<option value={data.BrandId}>{data.BrandName}</option>)
                    })}
                </select>
            </div>
        </>
    )
}

export default BrowseByBrands;
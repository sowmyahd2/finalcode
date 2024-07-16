import React, { useEffect } from 'react'
import './BrowseBox.css';
import { data, event } from 'jquery';
import { useHistory } from 'react-router';



const BrowseByShop = (props) => {
   
    const stores = props.stores;
   
    const history = useHistory()
    return(
        <>
            <div className="browseshop col-lg-4 col-md-4 col-sm-6 col-6">
                <select  onChange={(event)=>{console.log(event.target);history.replace('/shoppage/'+event.target.value)}}>
                    
                    <option>Browse By Shops</option>
                    {stores.map((data,index)=>{
                        return(<option value={data.DealerId}>{data.ShopName}</option>)
                    })}
                </select>
            </div>
        </>
    ) 
}

export default BrowseByShop;
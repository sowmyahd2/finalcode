import React from 'react'
import './SortbyFilter.css';
 const sorting=()=>{

       
    }
const SortbyFilter = () => {
    return(
        
        <div className="subcategorysort col-12 d-none d-lg-block ">
            <ul className="sortlist">
                <li>Sort</li>
                <li>:</li>
                <li><span>New</span></li>
                <li>|</li>
                <li onChange={(target) => { sorting(target) }}><span>Price-Low - High</span></li>
                <li>|</li>
                <li><span>Price-High - Low</span></li>
            </ul>   
        </div>
        
        
    )
}

export default SortbyFilter;



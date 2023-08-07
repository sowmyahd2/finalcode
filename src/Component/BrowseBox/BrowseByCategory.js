import React from 'react'
import './BrowseBox.css';


const BrowseByCategory = (props) => {
    const category=props.category; 
    return(
        <>
            <div className="browsecategory col-lg-4 col-md-4 col-sm-6 col-6">
                <select>
                    <option>Browse By Category</option>
                    {category.map((data,index)=>{
                        return(<option value={data.DepartmentId}>{data.DepartmentName}</option>)
                    })}
                </select>
            </div>
        </>
    )
}

export default BrowseByCategory;
import React from 'react'
import './FilterBox.css';
import { useDispatch, useSelector } from 'react-redux';


const BoxFilter = (props) => {
    //const panelhead = useSelector(state => state.Department.categoryByDepartment);
    return(
        <div className="filterlayout my-2">
            <div className="filterhead">
                <h6>{props.title}</h6>
            </div>
            <div className="filterbody">
                {props.children}
            </div>
        </div>
    )
}
 
export default BoxFilter;
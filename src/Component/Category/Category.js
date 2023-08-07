import React, { useEffect } from 'react'
import './Category.css';

import { useDispatch, useSelector } from 'react-redux';
import { getDepartment } from '../../Redux/Action/DepartmentAction';
import { Link } from 'react-router-dom';
const Sticky = React.lazy(() => import('react-sticky-el'))
const Category = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDepartment());
    }, [])
    const departments = useSelector(state => state.Department.department)
    return (
        <div className="categorylist d-none d-lg-block col-2 ">
                <Sticky stickyClassName="stickysidebar" boundaryElement=".container-fluid"  bottomOffset={60} topOffset={45}>
                    <ul className="list-group">
                        {departments.map((data, index) => {
                            return (
                                <Link to={"/department/category/" + data.DepartmentId}>
                                    <li className="list-group-item" key={index}><a href="#">{data.DepartmentName}</a></li></Link>
                            )
                        })}
                    </ul>
                </Sticky>
        </div>
    )
}

export default Category;
import React, { useEffect,useCallback, useMemo } from 'react'


import Header from '../Component/Header/Header'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getCategoryByDepartment,getstoresByDepartment } from '../Redux/Slice/DepartmentSlice';

import {getProductByDepartment} from '../Redux/Slice/ProductSlice';

import { pathOr } from 'ramda';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const ProductTittle = React.lazy(() => import('../Component/Product/ProductTittle'));
const Product = React.lazy(() => import('../Component/Product/Product'));

const BrowseByBrands = React.lazy(() => import('../Component/BrowseBox/BrowseByBrand'));
const BrowseByShop = React.lazy(() => import('../Component/BrowseBox/BrowseByShop'));
const BoxFilter = React.lazy(() => import('../Component/FilterBox/BoxFilter'));
const FilterBox = React.lazy(() => import('../Component/FilterBox/FilterBox'));
const Department = () => { 
    const { id} = useParams();
    const dispatch = useDispatch();
    const selectedCity = "mysore";

    useEffect(() => {
        dispatch(getCategoryByDepartment({"selectedCity":selectedCity, id:id}))
        dispatch(getProductByDepartment({"selectedCity":selectedCity, id:id}))
        dispatch(getstoresByDepartment({"selectedCity":selectedCity, id:id}))
    }, [selectedCity])
   const {categoryDepartment,departmentstores,departmentbrands}=useSelector(state=>state.department);
   console.log(departmentbrands);
   const {departmentproducts}=useSelector(state=>state.product);
console.log(departmentstores);
    const keys = Object.keys(categoryDepartment);
    const productskeys = Object.keys(departmentproducts);
    let count=false;
    const panelheading = () => { 
      
    let node = []
        keys.forEach((key) => {
        node.push(<BoxFilter title={key}>{panelbody(categoryDepartment[key])}</BoxFilter>)
        })
        return node;
    };

    const panelbody = (item) => {
        return item.map((data,index)=>{
            return (<FilterBox label={data.SubCategoryName} link={'/subcategory/'+data.SubCategoryId} />)
        }
        )} 
 
    const categoryheading = () => {
      
        let node = []
        productskeys.forEach((key) => {
            const title = key.split("_");
            node.push(<ProductTittle title={title[0]} link={"/maincategory/"+title[1]}>{categorybody(departmentproducts[key])}</ProductTittle>)
        })
            return node;
    };
        const categorybody = (item) => {
            if(item.length!=0){
                count=true;
            }
         
            return item.map((data,index)=>{
                return (<Product product={data}  />)
            }
            )}
    const banner = () => {
        return "https://s3-ap-southeast-1.amazonaws.com/cityonnet-virtualmall/category_banner/"+id+".webp"
    }
   
 

    return (
        <>
        <Header />
        <div className="container-fluid">
        <div className="row">
            <div className="departmentlayout col-lg-2 d-none d-lg-block">    
                {panelheading()}
            </div>
        <div className="departmentbanner col-lg-10 col-md-12 col-sm-12 col-12 my-2">
            <LazyLoadImage className="depimage img-fluid" rel="preload" as="image" src={banner()} />
            <div className="container-fluid my-2">
                <div className="row">
                    <div className="browselayout col-12 ">
                        <BrowseByShop stores={departmentstores} />
                        <BrowseByBrands brands={departmentbrands} />
                    </div>
                </div>
            </div>
        {categoryheading()}
       
        </div>
        
        </div>
        </div>
        </>

    )
}
export default Department;
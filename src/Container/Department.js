import React, { useEffect,useCallback, useMemo } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component';
import Header from '../Component/Header/Header'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCategoryByDepartment } from '../Redux/Action/DepartmentAction';

import { getProductByDepartment } from '../Redux/Action/ProductAction';

import { getBrowseByDepartment } from '../Redux/Action/DepartmentAction';
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
    const city = useSelector(state => state.UserPreference.city)
    useMemo(() => {
        dispatch(getCategoryByDepartment(city, id))
        dispatch(getProductByDepartment(city,id))
        dispatch(getBrowseByDepartment(city,id))
    }, [])
   
    const CategoryDepartment = useSelector(state => state.Department.categoryByDepartment);
    const ProductDepartment = useSelector(state => state.Product.productByDepartment);

    const keys = Object.keys(CategoryDepartment);
    const productskeys = Object.keys(ProductDepartment);
    let count=false;
    const panelheading = () => { 
      
    let node = []
        keys.forEach((key) => {
        node.push(<BoxFilter title={key}>{panelbody(CategoryDepartment[key])}</BoxFilter>)
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
            node.push(<ProductTittle title={title[0]} link={"/maincategory/"+title[1]}>{categorybody(ProductDepartment[key])}</ProductTittle>)
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
    const BrowseByDepStore = useSelector(state => pathOr([],["store"], state.Department.browseByDepartment));    
    const BrowseByDepbrand = useSelector(state => pathOr([],["brand"], state.Department.browseByDepartment));
 

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
                        <BrowseByShop stores={BrowseByDepStore} />
                        <BrowseByBrands brands={BrowseByDepbrand} />
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
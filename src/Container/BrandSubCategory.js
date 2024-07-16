import React, {useEffect} from 'react';

import Header from '../Component/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getBrandSubCategory, getbrowseByBrandCategory } from '../Redux/Slice/BrandSlice';
import Product from '../Component/Product/Product';
import { pathOr } from 'ramda';
import FilterBox from '../Component/FilterBox/FilterBox';
import BoxFilter from '../Component/FilterBox/BoxFilter';
import BrowseByShop from '../Component/BrowseBox/BrowseByShop';
import BrowseByCategory from '../Component/BrowseBox/BrowseByCategory';

import Type from '../Redux/Action/Types';
import InfiniteScroll from 'react-infinite-scroll-component';
let offset = 0
const BrandSubCategory = () => {
    const {DepartmentId, BrandId}= useParams();
    const [price, setPrice] = React.useState({min: 0, max:0})
const [checkedValues, setCheckedValues] = React.useState([]);
const [selectedPrice, setSelectedPrice] = React.useState({min: 0, max:0})
const[sort,setsort]=React.useState('desc');
const {brandsubcategoryproducts,browserbysubcategorybrandstore,brandsubcategoryfilters,browserbysubcategorybrand}=useSelector(state=>state.brand);
const dispatch = useDispatch();
    const city = "mysore";
    useEffect(() => {
        dispatch(getbrowseByBrandCategory({"selectedcity":city,brandid:BrandId,dpid:DepartmentId}))
       
    }, [])
    let limit = 24
    useEffect(()=>{
        dispatch({
            type: Type.resetProducts
        })
        const cost = selectedPrice.min + "," + selectedPrice.max
        dispatch(getBrandSubCategory({"selectedcity":city,dpid:DepartmentId,brandid:BrandId,  limit:limit, offset:offset, brandid:checkedValues.toString(), price:cost,sort:sort}))


    },[checkedValues, selectedPrice])

    const sorting=(type)=>{
       
        setsort(type);
        offset = 0;
        const cost = selectedPrice.min + "," + selectedPrice.max
        dispatch({
            type: Type.resetProducts
        })
       
      
        dispatch(brandsubcategoryproducts(city,DepartmentId,BrandId,  limit, offset, checkedValues.toString(), cost,sort))
    }
    const fetchData = () => {
        offset = limit + offset;
        const cost = selectedPrice.min + "," + selectedPrice.max
        dispatch(brandsubcategoryfilters(city,DepartmentId,BrandId,  limit, offset, checkedValues.toString(), cost,sort))
    }

    const handleBrandsFilter = (target) => {
       
        if (target.checked) {
            setCheckedValues(checkedValues.concat(target.value))
        } else {
            const index = checkedValues.indexOf(target.value)
            if (index !== -1) {
                setCheckedValues(checkedValues.filter(item => item != target.value))
            }
        }

    }
    return(
        <>
        <Header />
        <div className="container-fluid">
            <div className="row">
                <div className="brandSubcategory col-lg-2 d-none d-lg-block">    
                  
                <div className="">
                   {
                       brandsubcategoryfilters.map((data,index) => {
                           return(<FilterBox  onChange={(target) => { handleBrandsFilter(target) }} id={data.SubCategoryId} label = {data.SubCategoryName} checkbox />)
                       }
                   )
                    } 
                    </div> 
                    <div className="">
                    <BoxFilter title="Price">
                                <div class="mx-4 p-4 filterbox">
                               
                                </div>
                            </BoxFilter>
                    </div>
                </div>
                <div className="brandsubcategorylayout col-lg-10 col-md-12 col-sm-12 col-12 my-2">
                <div className="container-fluid my-2">
                        <div className="row">
                            <div className="browselayout col-12 ">
                               
                               
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                        <div className="subcategorysort col-12 d-none d-lg-block ">
            <ul style={{padding:"5px",margin:"0px",listStyleType: "none",display:"inline-flex",float:"right"}} className="sortlist">
                <li>Sort</li>
                <li>:</li>
                <li onClick={(target) => { sorting("new") }}><span>New</span></li>
                <li>|</li>
                <li onClick={(target) => { sorting("asc") }}><span>Price-Low - High</span></li>
                <li>|</li>
                <li onClick={(target) => { sorting("desc") }}><span>Price-High - Low</span></li>
            </ul>   
        </div>
        <InfiniteScroll
                                        dataLength={brandsubcategoryproducts.length}
                                        next={() => { fetchData() }}
                                        
                                        className={"row"}
                                        endMessage={
                                            <div className="end-of-product col-lg-12 col-md-12 col-sm-12 col-xs-12" >That's all folks...</div>
                                        }
                                        loader={<div className="end-of-product col-lg-12 col-md-12 col-sm-12 col-xs-12" >Loading Products...</div>}
                                    >
                            {
                                brandsubcategoryproducts.map((data,index)=>{
                                return (<Product product={data}  />)
                            })
                            }
                            </InfiniteScroll>   
                        </div>
                    </div>
                </div>            
            </div>
        </div>
        </>
    )
}

export default BrandSubCategory;
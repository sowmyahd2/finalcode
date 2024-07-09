import React,{useEffect} from 'react'

import Header from '../Component/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBrandCategory } from '../Redux/Action/BrandAction';
import ProductTittle from '../Component/Product/ProductTittle';
import Product from '../Component/Product/Product';
import { pathOr } from 'ramda';
import BoxFilter from '../Component/FilterBox/BoxFilter';
import FilterBox from '../Component/FilterBox/FilterBox';
 
const BrandCategory = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const city = useSelector(state => state.UserPreference.city)
    useEffect(()=>{
        dispatch(getBrandCategory(city,id))

    },[])
    const brandCategoryProducts = useSelector(state => pathOr([],["products"],state.Brand.brandCategory));    
    const brandCategoryFilter = useSelector(state => pathOr([],["filter"],state.Brand.brandCategory));    
    const brandCategoryFilterkeys = Object.keys(brandCategoryFilter);
    const brandCategoryProductskeys = Object.keys(brandCategoryProducts);
    
    const brandCategoryfilterHeading = () => { 
        let node = []

        brandCategoryFilterkeys.forEach((key) => {
            const title = key.split("_");      
            if(brandCategoryFilterbody(brandCategoryFilter[key]).length > 0){
                node.push(<BoxFilter title={title[0]}>{brandCategoryFilterbody(brandCategoryFilter[key])}</BoxFilter>)
            }
            
            })
            return node;
        };
    
        const brandCategoryFilterbody = (item) => {
            return item.map((data,index)=>{
                return (<FilterBox label={data.MainCategoryName} link={'/brands/subcategory/'+data.MainCategoryId+"/"+id} />)
            }
            )}
     

    const brandcategoryheading = () => {
        let node = []
        brandCategoryProductskeys.forEach((key) => {
            const title = key.split("_");
            if(brandcategorybody(brandCategoryProducts[key]).length !==0)
            {
                node.push(<ProductTittle title={title[0]} link={"/brands/maincategory/"+title[1]+"/"+id}> {brandcategorybody(brandCategoryProducts[key])}</ProductTittle>)
            }
           
        })
            return node;
    };
        const brandcategorybody = (item) => {
            return item.map((data,index)=>{
                return (<Product product={data}  />)
            }
            )}
    const brandcategorybanner = () => {
        return "https://s3-ap-southeast-1.amazonaws.com/cityonnet-virtualmall/brandbanners/"+id+".jpg"
    }
    return(
        <>
        <Header />
        <div className="container-fluid">
        <div className="row">
            <div className="brandcategorylayout col-lg-2 d-none d-lg-block">    
                {brandCategoryfilterHeading()}
            </div>
        <div className="brandcategorybanner col-lg-10 col-md-12 col-sm-12 col-12 my-2">
            <img className="brandimage" width="100%" src={brandcategorybanner()} />

            

        {brandcategoryheading()}
        </div>
        
        </div>
        </div>

        </>
    )
}

export default BrandCategory;
import React, {useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Header from '../Component/Header/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductbySubcategory } from '../Redux/Action/ProductAction';
import Product from '../Component/Product/Product';

import SubCategoryFilter from '../Component/FilterBySort/SubCategoryFilter';
import Sort from '../Component/FilterBySort/Sort';
import BrowseByShop from '../Component/BrowseBox/BrowseByShop';
import BrowseByBrands from '../Component/BrowseBox/BrowseByBrand';
import {getSubCategoryFilter} from '../Redux/Action/SubCategoryAction';
import FilterBox from '../Component/FilterBox/FilterBox';
import BoxFilter from '../Component/FilterBox/BoxFilter'
import { getBrowseBySubCategory } from '../Redux/Action/CategoryAction';
import { pathOr } from 'ramda';


import Type from '../Redux/Action/Types';

let offset = 0
const SubCategory = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const city = useSelector(state => state.UserPreference.city)
    const [checkedValues, setCheckedValues] = React.useState([]);
    const [price, setPrice] = React.useState({min: 0, max:0})
    const [pricemin, setpricemin] = React.useState([]);
    const [pricemax, setpricemax] = React.useState([]);
    const [sort, setsort] = React.useState("desc")
    const [selectedPrice, setSelectedPrice] = React.useState({min: 0, max:0})
    const [prices, setprices] = React.useState([])
    let limit = 24
    useEffect(()=>{
        dispatch(getSubCategoryFilter(city, id))
        dispatch(getBrowseBySubCategory(city,id))
        getMinMaxPrice()
    },[])
    useEffect(() => {
        offset = 0;
        dispatch({
            type: Type.resetProducts
        })
        const cost = selectedPrice.min + "," + selectedPrice.max
        dispatch(getProductbySubcategory(city, id,limit, offset, checkedValues.toString(), cost,sort))
        
    }, [checkedValues, selectedPrice])
    const subCategoryProduct = useSelector(state => state.Product.productBySubcategory);
    const subCategoryFilter = useSelector(state => state.SubCategory.subCategoryFilter);
    const hasMore = useSelector(state => state.Product.productBySubcategoryHasMore)
    const keys = Object.keys(subCategoryFilter);
    const getMinMaxPrice = () => {
        let max = 0;
        let min =0;
        if(subCategoryProduct.length > 0) { 
            subCategoryProduct.forEach((data) => {
            if(parseInt(data.SellingPrice) > parseInt(max))
            {
                max = data.SellingPrice;
            }
            if(parseInt(data.SellingPrice) < parseInt(min))
            {
                min = data.SellingPrice;
            }
        })
        let maximum=Math.round(max/6);
        setSelectedPrice({min:min,max:max});
        let second=maximum + maximum;
      let  third=second + maximum;
      let  fourth=third + maximum;
      let fifth=fourth+maximum;
      
      let second1=(Math.floor(second/10)*10) + 1;
      let third1=(Math.floor(third/10)*10) + 1;
      let fourth1=(Math.floor(fourth/10)*10) + 1;
      let fifth1=(Math.floor(fifth/10)*10) + 1;
   
      let one =min+'-'+Math.floor(second/10)*10;
      let two =second1+'-'+(Math.floor(third/10)*10);
      let three=third1+'-'+(Math.floor(fourth/10)*10);
      let four=fourth1+'-'+(Math.floor(fifth/10)*10);
      let five=fifth1+'-'+(Math.floor(max/10)*10);
  
       const p=[one,two,three,four,five];
       setprices(p);
        setPrice({min,max})
        setSelectedPrice({min,max})
        return{
            min, max
        }
    } else {
        setPrice({min,max})
        setSelectedPrice({min,max})
        return{
            min, max
        }
    }
    }
    const handlepriceFilter = (target) => {

        if (target.checked) {
          var prices = target.value.split("-");
          setpricemin(pricemin.concat(parseInt(prices[0])));
          setpricemax(pricemax.concat(parseInt(prices[1])));
          
         
      
          setSelectedPrice({min:Math.min(...pricemin),max:Math.max(...pricemax)})
         
      }
      else{
          var prices = target.value.split("-");
          
          const index = pricemin.indexOf(prices[0])
          const index1 = pricemax.indexOf(prices[1])
          pricemin.splice(index, 1);
          pricemax.splice(index1, 1);
        
          setpricemin(pricemin);
          setpricemax(pricemax);
          setSelectedPrice({min:Math.min(...pricemin),max:Math.max(...pricemax)})
    
       }
      }
    const sorting=(type)=>{
        setsort(type);
        offset =0;
        const cost = selectedPrice.min + "," + selectedPrice.max
        dispatch({
            type: Type.resetProducts
        })
       
      
        dispatch(getProductbySubcategory(city, id, limit, offset, checkedValues.toString(), cost,type))
    }
    const panelheading = () => { 
    let node = []
        keys.forEach((key) => {
        node.push(<BoxFilter title={key}>{panelbody(subCategoryFilter[key])}</BoxFilter>)
        })
        return node;
    };

    const panelbody = (item) => {
        return item.map((data,index)=>{
            return (<FilterBox name="brandIds" id={data.BrandId} onChange={(target) => { handleBrandsFilter(target) }} label={data.SpecificationValue || data.BrandName} checkbox />)
        }
        )}
        const fetcProductByPrice = (value) => {
            setSelectedPrice(value)
        }
        const BrowseBySubCategoryStore = useSelector(state => pathOr([],["store"], state.Category.browseBySubCategory));    
        const BrowseBySubCategorybrand = useSelector(state => pathOr([],["brand"], state.Category.browseBySubCategory));
     
        const fetchData = () => {
            offset = limit + offset;
            const cost = selectedPrice.min + "," + selectedPrice.max
            dispatch(getProductbySubcategory(city, id, limit, offset, checkedValues.toString(), cost,sort))
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
                <div className="subcategorylayout col-lg-2 d-none d-lg-block">
                {panelheading()}
                 <div className="">
                        <BoxFilter title="Price">
                            {prices.map((brand,index)=>{
                                return (<FilterBox onChange={(target) => { handlepriceFilter(target) }} id={brand}    label={brand} key={index} checkbox  />)
                            })}
                        </BoxFilter>
                    </div>  
          
                </div> 
                <div className="subcategoryproducts col-lg-10 col-md-12 col-sm-12 col-12 ">
                    <div className="container-fluid my-2">
                        <div className="row">
                            <div className="browselayout col-12 ">
                                <BrowseByShop  stores={BrowseBySubCategoryStore}/>
                                <BrowseByBrands brands={BrowseBySubCategorybrand}/>
                            </div>
                        </div>
                    </div>                    
                    <div className="container-fluid d-block d-md-none my-2">
                        <div className="row">
                            <div className="filterbysortlayout col-12">
                                <SubCategoryFilter />
                                <Sort />
                            </div>
                        </div>
                    </div>
                    <div className="maincateproducts">
                        <div className="container-fluid ">
                            <div className="row">
                            <div className="subcategorysort col-12 d-none d-lg-block ">
            <ul className="sortlist">
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
                                        dataLength={subCategoryProduct.length}
                                        next={() => { fetchData() }}
                                        hasMore={hasMore}
                                        className={"row"}
                                        endMessage={
                                            <div className="end-of-product col-lg-12 col-md-12 col-sm-12 col-xs-12" >That's all folks...</div>
                                        }
                                        loader={<div className="end-of-product col-lg-12 col-md-12 col-sm-12 col-xs-12" >Loading Products...</div>}
                                    >
                                {
                                    subCategoryProduct.map((data,index)=>{
                                        return (<Product product={data}  />)
                                    })
                                }
                                 </InfiniteScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SubCategory;

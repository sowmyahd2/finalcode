import React,{useEffect} from 'react';

import Header from '../Component/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Product from '../Component/Product/Product';
import { pathOr } from 'ramda';
import FilterBox from '../Component/FilterBox/FilterBox';
import BoxFilter from '../Component/FilterBox/BoxFilter';
import { getStoreMainCategoryProducts } from '../Redux/Action/shopPageAction';
import StoreFront from '../Component/StoreFront/StoreFront';


import Type from '../Redux/Action/Types';

import '../Component/FilterBox/FilterBox.css';

import InfiniteScroll from 'react-infinite-scroll-component';
let offset = 0
const StoreMainCategoryProducts = () => {
   
    const {DealerId,DepartmentId}= useParams();
    const dispatch = useDispatch();
    const city = useSelector(state => state.UserPreference.city)
    const [price, setPrice] = React.useState({min: 0, max:0})
    const [checkedValues, setCheckedValues] = React.useState([]);
    const [checkedcatValues, setCheckedcatValues] = React.useState([]);
    
    const [selectedPrice, setSelectedPrice] = React.useState({min: 0, max:0})
    const [prices, setprices] = React.useState([])
  
    const[sort,setsort]=React.useState('desc');
    const [pricemin, setpricemin] = React.useState([]);
    const [pricemax, setpricemax] = React.useState([]);
    useEffect(() => {
        getMinMaxPrice()
    }, [])
    let limit = 24
    useEffect(()=>{
  
        offset = 0;
        dispatch({
            type: Type.resetProducts
        })
        const cost = selectedPrice.min + "," + selectedPrice.max
        dispatch(getStoreMainCategoryProducts(city,DealerId,DepartmentId,limit, offset, checkedValues.toString(),checkedcatValues.toString(), cost,sort))

    },[checkedValues, selectedPrice,checkedcatValues])
    const Detail = useSelector(state => pathOr({},['detail'], state.ShopPage.storeMainCategoryProducts))
    const storeMainCategoryProducts = useSelector(state => pathOr([],["products"], state.ShopPage.storeMainCategoryProducts));
    const storeMainCategoryFilter = useSelector(state => pathOr([],["filter","category"], state.ShopPage.storeMainCategoryProducts))
    const storeMainCategoryPrice = useSelector(state => pathOr([],["price"], state.ShopPage.storeMainCategoryProducts));
    const storeMainCategoryBrands = useSelector(state => pathOr([],["filter","brands"], state.ShopPage.storeMainCategoryProducts) );
    const hasMore = useSelector(state => state.ShopPage.storeMainCategoryProductsHasMore)
    const getMinMaxPrice = () => {
        let max = 0;
        let min =0;
        let maximum=0;
  
        if(storeMainCategoryProducts.length > 0) { 
            storeMainCategoryProducts.forEach((data) => {
            if(parseInt(data.SellingPrice) > parseInt(max))
            {
                max = data.SellingPrice;
            }
            if(parseInt(data.SellingPrice) < parseInt(min))
            {
                min = data.SellingPrice;
            }
        })
        maximum=Math.round(max/5);
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
      let five=fifth1+'-'+(Math.ceil(max/10)*10);
  
       const p=[one,two,three,four,five];
       setprices(p);
      
    setPrice({min,max})
   
        return{
            min, max
        }
    } else {
       setPrice({min,max})
    
        return{
            min, max
        }
    }
    }
 
    const sorting=(type)=>{
        setsort(type);
        offset = 0;
        const cost = selectedPrice.min + "," + selectedPrice.max
        dispatch({
            type: Type.resetProducts
        })
       
      
        dispatch(getStoreMainCategoryProducts(city,DealerId,DepartmentId,limit, offset, checkedValues.toString(),checkedcatValues.toString(), cost,sort))
    }
    const fetchData = () => {
        offset = limit + offset;
        const cost = selectedPrice.min + "," + selectedPrice.max
        dispatch(getStoreMainCategoryProducts(city,DealerId,DepartmentId,limit, offset, checkedValues.toString(), checkedcatValues.toString(),cost,sort))
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
    const handlecatFilter = (target) => {
        
        if (target.checked) {
            setCheckedcatValues(checkedcatValues.concat(target.value))
        } else {
            const index = checkedcatValues.indexOf(target.value)
            if (index !== -1) {
                setCheckedcatValues(checkedcatValues.filter(item => item != target.value))
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
    const fetcProductByPrice = (value) => {
        setSelectedPrice(value)
    }
    return(
        <>
        <Header />
        <StoreFront detail={Detail}/>
        <div className="container-fluid">
            <div className="row">
                <div className="brandmaincategory col-lg-2 d-none d-lg-block">    
          
                <div className="">
                            <BoxFilter title="Subcategory">
                            {
                       storeMainCategoryFilter.map((data,index) => {
                        return(<FilterBox  onChange={(target) => { handlecatFilter(target) }} id={data.SubCategoryId} label = {data.SubCategoryName} checkbox />)
                       }
                   )
                    } 
                            </BoxFilter>
                        </div>
                 
                    
            
                    <div className="">
                        <BoxFilter title="Brands">
                            {storeMainCategoryBrands.map((brand,index)=>{
                                return (<FilterBox onChange={(target) => { handleBrandsFilter(target) }} id={brand.BrandId}    label={brand.BrandName} key={index} checkbox  />)
                            })}
                        </BoxFilter>
                    </div>
                    <div className="">
                        <BoxFilter title="Price">
                            {prices.map((brand,index)=>{
                                return (<FilterBox onChange={(target) => { handlepriceFilter(target) }} id={brand}    label={brand} key={index} checkbox  />)
                            })}
                        </BoxFilter>
                    </div>              
                </div>
                <div className="brandmaincategorylayout col-lg-10 col-md-12 col-sm-12 col-12 my-2">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="subcategorysort col-12 d-none d-lg-block ">
            <ul style={{padding:"5px",margin:"0px",listStyleType: "none",display:"inline-flex",float:"right"}} className="sortlist">
                <li>Sort</li>
                <li>:</li>
                <li onClick={(target) => { sorting("new") }}><span>New</span></li>
                <li>|</li>
                <li onClick={(target) => { sorting("Asc") }}><span>Price-Low - High</span></li>
                <li>|</li>
                <li onClick={(target) => { sorting("desc") }}><span>Price-High - Low</span></li>
            </ul>   
        </div>
                        <InfiniteScroll
                                        dataLength={storeMainCategoryProducts.length}
                                        next={() => { fetchData() }}
                                        hasMore={hasMore}
                                        className={"row"}
                                        endMessage={
                                            <div className="end-of-product col-lg-12 col-md-12 col-sm-12 col-xs-12" >That's all folks...</div>
                                        }
                                        loader={<div className="end-of-product col-lg-12 col-md-12 col-sm-12 col-xs-12" >Loading Products...</div>}
                                    >
                            {
                                storeMainCategoryProducts.map((data,index)=>{
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

export default StoreMainCategoryProducts;
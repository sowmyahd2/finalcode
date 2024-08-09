
import React, {useEffect} from 'react';
import './StoreFront.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import SortbyFilter from '../SortbyFilter/SortbyFilter';
import {useDispatch, useSelector } from 'react-redux';
import ProductTittle from '../Product/ProductTittle';
import Product from '../Product/Product';
import { pathOr } from 'ramda';
import BoxFilter from '../FilterBox/BoxFilter';
import FilterBox from '../FilterBox/FilterBox';
import { useParams } from 'react-router-dom';

const StoreFrontProducts = ({products,filters}) => {
    const { DealerId } = useParams();
    
    const shopPagecategoryProducts = products;
    const shopPageCategoryProductskeys = Object.keys(shopPagecategoryProducts);    
    const shopPagecategoryFilter = filters;    
    const shopPagecategoryFilterkeys = Object.keys(shopPagecategoryFilter);

    
        const shopPagecategoryFilterbody = (item) => {
            return item.map((data,index)=>{
                return (<FilterBox label={data.MainCategoryName} link={"/store/maincategory/products/"+DealerId+"/"+data.MainCategoryId} />)
            }
            )}
    
    
            const shopPageCategoryHeading = () => {
                let node = []
                shopPageCategoryProductskeys.forEach((key) => {
                    const title = key.split("_");
                    node.push(<ProductTittle title={title[0]} link={"/store/maincategory/products/"+DealerId+"/"+title[1]}>{shopPageCategoryBody(shopPagecategoryProducts[key])}</ProductTittle>)
                })
                    return node;
            };
        const shopPageCategoryBody = (item) => {
            return item.map((data,index)=>{
                return (<Product product={data}  />)
            }
            )}

    const shopPagecategoryfilterHeading = () => { 
        let node = []
        shopPagecategoryFilterkeys.forEach((key) => {
            node.push(<BoxFilter title={key}>{shopPagecategoryFilterbody(shopPagecategoryFilter[key])}</BoxFilter>)
            })
            return node;
        };

    return(
        <>

<div className="container-fluid my-2 ">
                <div className="row">
                    <div className="storefrontfilter col-2 d-none d-lg-block">
                    {shopPagecategoryfilterHeading()}
                    </div>
                    <div className="storefrontlayout col-lg-10 col-12">
                        <div className="storefrontbox col-12">
                            <div className="storefrontsearch col-lg=4 col-md-5 col-sm-8 col-8">
                                <input className="storeinputsearch " type="text" name placeholder="Search by Products" />
                                <button className="storegobutton "><i className="fas fa-search" /></button>
                            </div>
                            <div className="storefrontmylisting col-4">
                                <button className="storemylisting col-12">My Listing</button>
                            </div>
                        </div>    
                     
                        
                        {shopPageCategoryHeading()}            

                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default StoreFrontProducts;


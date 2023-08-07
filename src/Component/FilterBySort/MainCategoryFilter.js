import React, {useState} from 'react';
import './FilterBySort.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import FilterBox from '../FilterBox/FilterBox';
import BoxFilter from '../FilterBox/BoxFilter';
import {useSelector } from 'react-redux';
import { pathOr } from 'ramda';

const MainCategoryFilter = () => {
    const [filterModalOpen,setFilterToggleModal] = useState(false);
    const MainCategory = useSelector(state => pathOr([],["category","category"],state.Category) );
    const brands = useSelector(state => pathOr([],["category","brands"],state.Category) );
    const storeBrands = useSelector(state => pathOr([],["category","localBrands"],state.Category) );
    const price = useSelector(state => pathOr([],["category","price"],state.Category) );
   
    
    return(
        <>
        <div className="filterbutton col-6 d-block d-lg-none " onClick = {() =>{setFilterToggleModal(!filterModalOpen)}}>
            <h6>Filter <i class="fas fa-filter"></i></h6>
        </div>                    
        <Modal open={filterModalOpen} onClose={() => {setFilterToggleModal(!filterModalOpen)}} center>
            <ul className="list-group filterlist">
                <h6>Filter <i class="fas fa-filter"></i></h6>
                
                <div className="subcategoryfilter">
                    <div className="subfilter  my-2">
                        
                        {MainCategory.map((data,index)=>{
                    return(
                        <FilterBox label={data.SubCategoryName} id={data.SubCategoryId} key={index}  />
                    )
                    })}</div>
                
                    <div className="">
                        <BoxFilter title="Brands">
                            {brands.map((brand,index)=>{
                                return (<FilterBox label={brand.BrandName} id={brand.BrandId} key={index} checkbox  />)
                            })}
                        </BoxFilter>
                    </div>
                    <div className="">
                        <BoxFilter title="Store Brands">
                            {storeBrands.map((brand,index)=>{
                                return (<FilterBox label={brand.BrandName} id={brand.BrandId} key={index} checkbox  />)
                            })}
                        </BoxFilter>
                    </div>
                    
                    <div className="">
                        <BoxFilter title="Price">
                            {price.map((brand,index)=>{
                                return (<FilterBox label={brand.price} key={index} checkbox  />)
                            })}
                        </BoxFilter>
                    </div>
                </div> 
            </ul>
        </Modal>
        </>
    )
}

export default MainCategoryFilter;
import React, {useState} from 'react';
import './FilterBySort.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import FilterBox from '../FilterBox/FilterBox';
import BoxFilter from '../FilterBox/BoxFilter';
import {  useSelector } from 'react-redux';


const SubCategoryFilter = () => {
    const [filterModalOpen,setFilterToggleModal] = useState(false);
    const subCategoryFilter = useSelector(state => state.SubCategory.subCategoryFilter);
    const keys = Object.keys(subCategoryFilter);
    
    const panelheading = () => { 
    let node = []
        keys.forEach((key) => {
        node.push(<BoxFilter title={key}>{panelbody(subCategoryFilter[key])}</BoxFilter>)
        })
        return node;
    };

    const panelbody = (item) => {
        return item.map((data,index)=>{
            return (<FilterBox label={data.SpecificationValue || data.BrandName} checkbox />)
        }
        )}
 
    
    const filterModal = (modal) =>{
        setFilterToggleModal(!filterModalOpen)

    }
    
    return(
        <>
        <div className="filterbutton col-6 " onClick = {() =>{setFilterToggleModal(!filterModalOpen)}}>
            <h6>Filter <i class="fas fa-filter"></i></h6>
        </div>                    
        <Modal open={filterModalOpen} onClose={() => {setFilterToggleModal(!filterModalOpen)}} center>
            <ul className="list-group filterlist">
                <h6>Filter <i class="fas fa-filter"></i></h6>
                {panelheading()}
            </ul>
        </Modal>
        </>
    )
}

export default SubCategoryFilter;
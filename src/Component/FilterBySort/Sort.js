import React, {useState} from 'react'
import './FilterBySort.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import SortbyFilter from '../SortbyFilter/SortbyFilter';

const Sort = () => {
        const [sortModalOpen,setSortToggleModal] = useState(false);
        const sortModal = (modal) =>{
            setSortToggleModal(!sortModalOpen)
    
        }
    return(
        <>
        <div className="sortbutton col-6 d-block d-lg-none" onClick = {() =>{setSortToggleModal(!sortModalOpen)}}>
            <h6>Sort <i class="fas fa-sort"></i></h6>
        </div>
        <Modal open={sortModalOpen} onClose={() => {setSortToggleModal(!sortModalOpen)}} center>
            <ul className="list-group sortbylist">
                <h6>Sort :</h6>
                <li><a>New</a></li>
                <li><a>Price-Low - High</a></li>
                <li><a>Price-High - Low</a></li>
            </ul>
        </Modal>
        </>
    )
}

export default Sort;
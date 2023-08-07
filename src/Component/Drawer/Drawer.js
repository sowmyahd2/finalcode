import React, { useState, useEffect } from 'react'
import './Drawer.css'
import Sidebar from "react-sidebar";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useSelector, useDispatch } from 'react-redux';
import { getBrandcat } from '../../Redux/Action/BrandAction';
import { getStore } from '../../Redux/Action/StoreAction';
import { Link } from 'react-router-dom';
import { toggleDrawer } from '../../Redux/Action/DrawerAction';


const Drawer = (props) => {
    const departments = useSelector(state=>state.Department.department)
    const brands = useSelector(state=>state.Brand.brandcat)
    const stores = useSelector(state=>state.Store.store)
    const drawer = useSelector(state => state.drawer);
    const city = useSelector(state => state.UserPreference.city);
    const [foundbrands, setFoundbrands] = useState(brands);
    const [foundstores, setFoundstores] = useState(stores);
    
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getBrandcat(city,1));
      dispatch(getStore(city,1));
      //setMovies(prevMovies => ([...prevMovies, ...result]));
      setFoundbrands(brands);
      setFoundstores(stores);

    },[])

    const hideSidebar=()=>{
      
        dispatch(toggleDrawer(false,0));

    }
    const onchangebrand=(val)=>{
       
        setFoundbrands(brands);
        dispatch(getBrandcat(city,val));
        
        
    }
    const onchangestore=(val)=>{
      
        dispatch(getStore(city,val));
        setFoundstores(stores);
    }
    const filterbrand=(e)=>{
     
        const keyword = e;

    if (keyword !== '') {
      const results = brands.filter((user) => {
        return user.BrandName.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundbrands(results);
    } else {
        setFoundbrands(brands);
      // If the text field is empty, show all users
    }
    }
    const filterstores=(e)=>{
     
        const keyword = e;

    if (keyword !== '') {
      const results = stores.filter((user) => {
        return user.ShopName.toLowerCase().startsWith(keyword.toLowerCase());
      
      });
      setFoundstores(results);
    } else {
        setFoundstores(stores);
      
    }
    }
    return(
        <>
      
        <Sidebar
        rootClassName = "rootsidebar"
        overlayClassName="overlaysidebar"   
        
        sidebar={
            <Tabs className="sidebartabs" selectedIndex={drawer.activeTab} onSelect={index => dispatch(toggleDrawer(true, index))}>
            <TabList>
                <div className="welcome"><h6>Hi! Manjunath</h6><p>+91 9480134391</p></div>
              <Tab>Category</Tab>
              <Tab>Brand</Tab>
              <Tab>Store</Tab>
            </TabList>
         
            <TabPanel>
            <ul className="list-group categorylist" >
              {departments.map((department,index)=>{
                  return(
                    <Link    to ={"/department/category/"+department.DepartmentId}><li className="list-group-item"onClick={()=>dispatch(toggleDrawer(false))} key={index}>{department.DepartmentName}</li></Link>
                  )
              })}
              </ul>
            </TabPanel>
            <TabPanel>
            <form className="formdrawer">
                <div class="form-group selectdrawer">
                <select class="form-control" id="exampleFormControlSelect1" onChange={e => {onchangebrand(e.target.value);dispatch(toggleDrawer(false))}}>
         
                        <option>Select Department</option>
                        {departments.map((department,index)=>{
                            return(  <option value={department.DepartmentId}>{department.DepartmentName}</option>
                        )
        })}  
                       
                    </select>
                </div>
                <div class="form-group searchdrawer">
                    <input type="search"  onChange={e=>filterbrand(e.target.value)} class="form-control "  placeholder="Search By Brand" />
                </div>
            </form>
            <ul className="list-group brandlist">
                {foundbrands.map((brand,index)=>{
                    return(
                        <Link onClick={hideSidebar}  to ={"/brandcategory/"+brand.BrandId}><li className="list-group-item" key={index}>{brand.BrandName}</li></Link>
                    )
                })}
            </ul>             
            </TabPanel>
            <TabPanel>
            <form className="formdrawer">
                <div class="form-group selectdrawer">
                <select class="form-control" id="exampleFormControlSelect1" onChange={e => onchangestore(e.target.value)}>
         
         <option>Select Department</option>
         {departments.map((department,index)=>{
             return(  <option value={department.DepartmentId}>{department.DepartmentName}</option>
         )
})}  
        
     </select>
                </div>
                <div class="form-group searchdrawer">
                    <input type="search" class="form-control " onChange={e=>filterstores(e.target.value)}  placeholder="Search By Store" />
                </div>
            </form>
            <ul className="list-group storelist">
                {foundstores.map((store,index) =>{
                    return(
                        <Link onClick={hideSidebar}  to ={"/shoppage/"+store.DealerId}><li className="list-group-item" key={index}>{store.ShopName}</li></Link>
                    )
                })}
            </ul>
              
            </TabPanel>
          </Tabs>

        }
        open={props.sidebarOpen}
            onSetOpen={(isOpen)=>{
                props.setSidebarOpen(false)
            }}
            styles={{ sidebar: { background: "white" } }}
        />

        
        </>
    )

}
export default Drawer;
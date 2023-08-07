import React, {useEffect, useState} from 'react'
import './Profile.css';
import { userprofile } from '../../Redux/Action/UserprofileAction';
import { useSelector, useDispatch } from 'react-redux';
import PersonalInfo from '../../Component/Profile/PersonalInfo';
import ChangePass from '../../Component/Profile/ChangePass';
import Address from '../../Component/Profile/Address';
import OrderPage from '../../Component/Orders/Orderpage';
import BankDetails from '../../Component/Profile/BankDetails';
import Homedelivery from '../../Container/Homedeliveryorders';
import Wishlist from '../../Container/Wishlist';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { pathOr } from 'ramda';
const Profile = () => {
  const profile = useSelector(state=>state.Userprofile.profile.user)
  const user= useSelector(state => state.Login)
  const userId = pathOr("", ["user", "UserId"], user);  
  const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(userprofile(userId));
    }, [])
    
    return(
        <div className="profilelayout mt-2">
            <div className="container-fluid">
                <div className="row d-none d-lg-block">
                 
                    <div className="profileorder col-lg-12 col-md-12 col-12 ">                        
               
                  <Tabs>
               
                    <TabList>
                     
                      <Tab>
                        <p>PICK UP IN SHOP ORDERS</p>
                      </Tab>
                      <Tab>
                        <p>HOME DELIVERY ORDERS</p>
                      </Tab>
                      <Tab>
                        <p>WISHLIST</p>
                      </Tab>
                      <Tab>
                        <p>REVIEWS</p>
                      </Tab>
                      <Tab>
                        <p>PERSONAL INFORMATION</p>
                      </Tab>
                      <Tab>
                        <p>CHANGE PASSWORD</p>
                      </Tab>
                      <Tab>
                        <p>ADDRESS</p>
                      </Tab>
                      <Tab>
                        <p>BANK DETAILS</p>
                      </Tab>
                    </TabList>
                  
                   
                    <TabPanel>
                      <div className="panel-content">
                      <OrderPage/>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="panel-content">
                      <Homedelivery/>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="panel-content">
                      <Wishlist/>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="panel-content">
                        <h2>Reviews</h2>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="panel-content">
                      <PersonalInfo />
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="panel-content">
                      <ChangePass />
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="panel-content">
                      <Address/>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="panel-content">
                      <BankDetails />
                      </div>
                    </TabPanel>
                  </Tabs>
              
                  </div>       
                
                 </div>
            </div>
               
        </div>
    )
}

export default Profile;
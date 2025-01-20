import React, { useEffect, Suspense, lazy,useState} from 'react'
// import './CommonContainer.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Login from '../Component/Login/Login';

const Header = lazy(() => import('../Component/Header/Header'));
const LoginPage = () => { 
    
    return(
        <div className="container-fluid"> 

            <Header />
            <Login />
           
            </div>
    )
}

export default LoginPage;
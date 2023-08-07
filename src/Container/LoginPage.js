import React from 'react'
import './CommonContainer.css';
import Header from '../Component/Header/Header';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Login from '../Component/Login/Login';

const LoginPage = () => { 
    
    return(
        <>
            <Header />
            <Login />
            
        </>
    )
}

export default LoginPage;
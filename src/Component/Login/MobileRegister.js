import React, { useEffect, useState } from 'react'
import './Login.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../../Redux/Action/LoginAction';
import { pathOr } from 'ramda';
import { Redirect } from 'react-router-dom';

const MobileRegister = () => { 
    const dispatch = useDispatch();
    const user= useSelector(state => state.Login)
    const [mobile, setmobile] = useState("")
  
    const userId = pathOr("",["user","UserId"],user);
    if(userId!=""){
        return(<Redirect to="/" />)
    }
    const onLogin = (event)=>{
        
        event.preventDefault();
        dispatch(getLogin(email,password))

    }
    return(    
      
            <div className="loginlayout col-12">
                       
                <div className="container-fluid">
                <div className="row paddingzero">
                    <div className="loginbox col-lg-4 col-md-6 col-sm-8 col-12">
                        <div className="logininner col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group ">
                        <div className="form-group ">
                                    <div className="input-group">
                                    <div className="input-group-addon loginicon "><i className="fa fa-lock" /></div>
                                    <input type="password" name="register_password" className="form-control col-11" placeholder="Password" required="required" />
                                    </div>
                                </div>
                                <div className="form-group ">
                                    <div className="input-group">
                                    <div className="input-group-addon loginicon "><i className="fa fa-lock" /></div>
                                    <input type="password" name="register_cpassword" className="form-control col-11" placeholder="Confirm Password" required="required" />
                                    </div>
                                </div>
                                
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

     

    )
}

export default MobileRegister;
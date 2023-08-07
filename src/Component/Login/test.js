import React, { useEffect, useState } from 'react'
import './Login.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin,sendotp } from '../../Redux/Action/LoginAction';
import { pathOr } from 'ramda';
import { Redirect } from 'react-router-dom';

const clientId = '699515915319-0n5jsob3hrtnace04ufft58n7te631nk.apps.googleusercontent.com';
const Login = () => { 
    const dispatch = useDispatch();
    const user= useSelector(state => state.Login)
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [mobile, setmobile] = useState("")
    const userId = pathOr("",["user","UserId"],user);
    const [list, setList] = useState(false);
    const [code, setCode] = useState("");
    const [showcode, setshowCode] = useState(false);
    const[showinput,setshowinput]=useState(true);
    useEffect(() => {
      /* global google */
      const google = window.google;
      google.accounts.id.initialize({
        client_id: "699515915319-0n5jsob3hrtnace04ufft58n7te631nk.apps.googleusercontent.com",
        callback: handeleresponse,
      });
  
      google.accounts.id.renderButton(document.getElementById("signinStudent"), {
        theme: "outline",
        size: "large",
        shape: "pill",
        text:"fdf"
        
      });
  
      google.accounts.id.prompt();
    },[]);
 
    const handeleresponse=(response)=>{
console.log(response);
    }

  
    return(            
      <div id="signinStudent">fdgdfg</div>

     

    )
    
}

    
    
  
  
export default Login;
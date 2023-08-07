import React from "react";
import './popup.css';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux/Action/LoginAction';
const Popup = props => {

  const dispatch = useDispatch();
  const userlogout = (event) => {
    event.preventDefault();
    dispatch(logout())
  }
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        
<ul style={{listStyleType: "none" }}>
  <li >
        <Link style={{paddingLeft: 13, textDecoration: 'none', color:"#000000"}} to={"/profile"} className="navlinks">Account</Link>
        </li> <li>  <Link style={{paddingLeft: 13, textDecoration: 'none', color:"#000000"}} to={"/profile"} className="navlinks">Orders</Link>
        </li> <li>  <Link style={{paddingLeft: 13, textDecoration: 'none', color:"#000000"}} to={"/profile"} className="navlinks">WishList</Link>
        </li>  <li style={{paddingLeft: 13, textDecoration: 'none', color:"#000000"}} onClick={(event) => { userlogout(event) }}> Logout</li>
       
       </ul>
       </div>
  
    </div>
  );
};
 
export default Popup;
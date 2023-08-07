
import React, {useEffect, useState} from 'react'
import './Profile.css';
import { userprofile} from '../../Redux/Action/UserprofileAction';
import { changepass } from '../../Redux/Action/LoginAction';
import { useSelector, useDispatch } from 'react-redux';
import { pathOr } from 'ramda';
const ChangePassword = () => {
    const profile = useSelector(state=>state.Userprofile.profile.user)
  
    const user= useSelector(state => state.Login)
    const userId = pathOr("", ["user", "UserId"], user);
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(userprofile(userId));
    })
    const  changepassword = (event)=>{
      
        
        event.preventDefault();
        dispatch(changepass(userId,password))

    }
    return(
        <>
      <div className="personalinfo">
            <div className="container-fluid">
                <div className="row">
                    <div className="personaldetail">
                        <h5>Change Password</h5>
                        <form>
                            <div className="form-group row">
                                <label for="staticEmail" className="col-sm-3 col-form-label">Email</label>
                                <div className="col-sm-9">
                                <input type="text" readOnly className="form-control" id="staticEmail" value={profile.EmailId} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="inputPassword" className="col-sm-2 col-form-label">Old Password</label>
                                <div class="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                                </div>
                            </div>
                            
                            <div className="form-group row">
                                <label for="inputPassword" className="col-sm-2 col-form-label">New Password</label>
                                <div class="col-sm-10">
                                <input type="password" onChange={(event)=>{setPassword(event.target.value)}} className="form-control" id="inputPassword" placeholder="Password" />
                                </div>
                            </div>
                            
                            <div className="form-group row">
                                <label for="inputPassword" className="col-sm-2 col-form-label">Confirm New Password</label>
                                <div class="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                                </div>
                                <button type="button" onClick={(event)=>{changepassword(event)}}  className="btn loginbutton col-12" >Changepassword </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  

        </>
    )
}
export default ChangePassword;
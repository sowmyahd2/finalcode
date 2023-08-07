import React, {useEffect, useState} from 'react'
import './Profile.css';
import { userprofile } from '../../Redux/Action/UserprofileAction';
import { useSelector, useDispatch } from 'react-redux';
import { pathOr } from 'ramda';

const PersonalInformation = () => {
    const profile = useSelector(state=>state.Userprofile.profile.user)
    const user= useSelector(state => state.Login)
   // const userId = pathOr("", ["user", "UserId"], user);
    const dispatch = useDispatch();
    console.log(profile);
    useEffect(() => {
        dispatch(userprofile(2910));
    }, [])
    
    return(
        <>
        <div className="personalinfo">
            <div className="container-fluid">
                <div className="row">
                    <div className="personaldetail">
                        <h5>Personal Information</h5>
                        <form>
                      
                            <div className="form-group row">
                                <label for="staticEmail" className="col-sm-3 col-form-label">Email</label>
                                <div className="col-sm-9">
                                <input type="text" className="form-control" id="staticEmail" value={profile.EmailId}  />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="inputName" className="col-sm-3 col-form-label">Name</label>
                                <div className="col-sm-9">
                                <input type="text" className="form-control" id="inputName" placeholder="Full Name" value={profile.UserName}/>
                                </div>
                            </div>                            
                            <div className="form-group row">
                                <label for="inputNumber" className="col-sm-3 col-form-label">Mobile</label>
                                <div className="col-sm-9">
                                <input type="number" className="form-control" id="inputNumber" placeholder="Number "  value={profile.Mobile} />
                                
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="form-check-label col-3" for="exampleRadios1">Gender</label>
                                <div className="form_inline col-sm-9">
                                <div class="col-sm-4">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label class="form-check-label" for="inlineRadio1">Male</label>
                                </div>
                                    <div class="col-sm-4">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                    <label class="form-check-label" for="inlineRadio2">Female</label>
                                </div>   
                                </div>                                
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" for="inputCity">City</label>
                                <div className="col-sm-9">
                                <input type="text" className="form-control" id="inputCity" value={profile.CityName}  />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" for="inputState">State</label>
                                <div className="col-sm-9">
                                <input type="text" className="form-control" id="inputCity"  value={profile.StateName} />
                              
                                </div>

                            </div>
                            <div className="savechanges">
                            <button type="button">Save Changes</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
           

        </>
    )
}
export default PersonalInformation;
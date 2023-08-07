import React, { useEffect, useState } from 'react'
import './Login.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin,sendotp,mobileLogin } from '../../Redux/Action/LoginAction';
import { pathOr } from 'ramda';
import { Redirect } from 'react-router-dom';

const Login = () => { 
    const dispatch = useDispatch();
    const user= useSelector(state => state.Login)
    const userotp= useSelector(state => state.Login.otp)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [mobile, setmobile] = useState("")
    const userId = pathOr("",["user","UserId"],user);
    const [list, setList] = useState(false);
    
    const [showcode, setshowCode] = useState(false);
    const[showinput,setshowinput]=useState(true);
    if(userId!=""){
        return(<Redirect to="/" />)
    }
    const onLogin = (event)=>{
        
        event.preventDefault();
        dispatch(getLogin(email,password))

    }
    const Mobilelogin = (event)=>{
    
     const first= document.getElementsByName('field-1')[0].value;
     const second= document.getElementsByName('field-2')[0].value;
     const third= document.getElementsByName('field-3')[0].value;
     const fouth= document.getElementsByName('field-4')[0].value;
   
     
    if(`${first}${second}${third}${fouth}`==userotp ){
      event.preventDefault();
        dispatch(mobileLogin(mobile))
    }
  
    else{
      alert("invalid otp");
    }   
    

  }
    const otpsend=()=>{
      var val = Math.floor(1000 + Math.random() * 9000);
              if(mobile.length>=9){
                setshowCode(true);
                setshowinput(false);
            dispatch(sendotp(mobile,val))
        }
    }
   
    return(            
            <div className="loginlayout col-12">
                <div className="container-fluid">
                <div className="row paddingzero">
                    <div className="loginbox col-lg-4 col-md-6 col-sm-8 col-12">
                        <div className="logininner col-lg-12 col-md-12 col-sm-12 col-12">
                        <Tabs>
                            <TabList>
                                <Tab>Login</Tab>
                                <Tab>Register</Tab>
                            </TabList>                        
                            <TabPanel>
                            <form className="form-horizontal" method="post" action>
                                {user.error}
     

                                {showinput==true &&
                                <div>
                                <div className="form-group ">
                                    <div className="input-group ">
                                    <div className="input-group-addon loginicon "><i className="fa fa-user" /></div>
                                    <input onChange={(event)=>setmobile(event
                                      .target.value)} type="text" name="login_email" className="form-control col-11" placeholder="Mobile Number" required="required" />
                                    </div>
                                </div>
                                {showcode==true &&
                                <div className="form-group ">
                                <div className="input-group">
                            
                                    <div>
                                   
                                <InputFields></InputFields> 
                                </div>       </div>     </div>  
                                  } </div>
                                }
                                <div className="form-group">
                                    
 
                                    <a onClick={(event)=>{otpsend()}} className="pull-right col-lg-6 col-md-6 col-sm-6 col-12" data-target="#pwdModal" data-toggle="modal">Request OTP</a>
                                </div> 
                               
                                 <InputFields ></InputFields>        
                                <div className="form-group">
                                    
                                    <label className="col-lg-6 col-md-6 col-sm-6 col-12" htmlFor="rememberMe"> <input type="checkbox" id="rememberMe" /> Remember Me</label>
                                    <a className="pull-right col-lg-6 col-md-6 col-sm-6 col-12" data-target="#pwdModal" data-toggle="modal">Forgot password?</a>
                                </div>  
                                <button type="button" onClick={(event)=>{onLogin(event)}}  className="btn loginbutton col-12" >Login </button>

                                
                                <div className="or-seperator my-3"><i>or</i></div>
                                <div className="text-center login_socialmedia">
                                    <a className="btn btn-primary btn-block"><i class="fab fa-facebook-square"></i> Sign in with <b>Facebook</b></a>
                                    <a className="btn btn-danger btn-block"><i class="fab fa-google-plus-square"></i> Sign in with <b>Google</b></a>
                                </div>
                                 
                            </form>

                            </TabPanel>
                            <TabPanel>
                            <form className="form-horizontal" method="post" action>
                                <div className="form-group ">
                                    <div className="input-group">
                                    <div className="input-group-addon loginicon "><i className="fa fa-user" /></div>
                                    <input type="text" name="register_username" className="form-control col-11" placeholder="Mobile Number" onChange={(event)=>setmobile(event
                                      .target.value)} required="required" />
                                    </div>
                                    <a onClick={(event)=>{otpsend()}} className="pull-right col-lg-6 col-md-6 col-sm-6 col-12" data-target="#pwdModal" data-toggle="modal">Request OTP</a>
                                </div>
                                <InputFields ></InputFields> 
                                {list &&  
                                <div>                                           
          <div className="form-group ">
          <div className="input-group">
          <div ></div>
          <input type="text" name="register_username" className="form-control col-11" placeholder="Otp" required="required" />
          </div>
      </div>
       <div className="form-group ">
       <div className="input-group">
       <div ></div>
       <input type="text" name="register_username" className="form-control col-11" placeholder="Set password" required="required" />
       </div>
   </div></div>   
      }
                               
                                
                                <button type="Button"  onClick={(event)=>Mobilelogin(event)} className="btn loginbutton col-12" >Register</button>

                                <div className="or-seperator my-3"><i>or</i></div>
                                <div className="text-center login_socialmedia">
                                    <a className="btn btn-primary btn-block "><i class="fab fa-facebook-square"></i> Sign in with <b>Facebook</b></a>
                                    <a className="btn btn-danger btn-block "><i class="fab fa-google-plus-square"></i> Sign in with <b>Google</b></a>
                                </div>
                            </form>
  
                            </TabPanel>
                        </Tabs>
                        </div>
                    </div>
                </div>
            </div>
            </div>

     

    )
    
}
class InputFields extends React.Component {
    
  handleChange = (e) => {
      const { maxLength, value, name } = e.target;
      const [fieldName, fieldIndex] = name.split("-");
    
  
      let fieldIntIndex = parseInt(fieldIndex, 4);
    
      // Check if no of char in field == maxlength
      if (value.length >= maxLength) {
    
        // It should not be last input field
        if (fieldIntIndex <= 4) {
    
          // Get the next input field using it's name
          const nextfield = document.querySelector(
            `input[name=field-${fieldIntIndex + 1}]`
          );
    
          // If found, focus the next field
          if (nextfield !== null) {
            nextfield.focus();
          }
        }
        else{
           
        }
      }
    };
    
    render() {
      return (
        <div>
          <InputFild name="field-1" length="1" 
                     handleChange={this.handleChange} />
          <InputFild name="field-2" length="1" 
                     handleChange={this.handleChange} />
          <InputFild name="field-3" length="1" 
                     handleChange={this.handleChange} />
                        <InputFild name="field-4" length="1" 
                     handleChange={this.handleChange} />
        </div>
      );
    }
  }
  class InputFild extends React.Component {
    render() {
      return (
        <input
          style={{ margin: 10 }}
          type="text"
          name={this.props.name}
          maxLength={this.props.length}
          onChange={this.props.handleChange}
        ></input>
      );
    }
  }
export default Login;
import Api from '../../Config/Api';
import Type from './Types';



export const getLogin = (email,password) => async dispatch => {
    try{
        const body = {
            email,
            password,
            number:""
        }
        
        const response = await Api.post('auth',body)
        
        if(response.message === "success"){
            dispatch({
                type : Type.loginSuccess,
                payload : response.data
            })
        }else{
            dispatch({
                type :Type.loginFailure,
                payload:response.message
            })
        }
    }catch(error){ 

    }
}
export const mobileLogin = (number) => async dispatch => {

    try{
        const body = {
            email:"",
            password:"",
            number
        }
        
        const response = await Api.post('auth',body)
        
        if(response.message === "success"){
            dispatch({
                type : Type.loginSuccess,
                payload : response.data
            })
        }else{
            dispatch({
                type :Type.loginFailure,
                payload:response.message
            })
        }
    }catch(error){ 

    }
}
export const sendotp = (number,otp) => async dispatch => {
 
    try{
        const body = {
            number,
            otp,
        }
        
        const response = await Api.post('user/sendotp',body)
        
        if(response.message === "success"){
            dispatch({
                type : Type.otpSuccess,
                payload : response.data
            })
        
        }
    }catch(error){ 

    }
    
}
export const changepass = (userid,password) => async dispatch => {
    try
    {
        
        const response = await Api.get('user/changepass/'+userid+'/'+password)
        if(response.message === "success"){
            dispatch({
                    type : Type.changepass,
                    payload : response.data
                })
            }
        } catch(error){
         
        }
}
export const logout = () => dispatch => {
    dispatch({
        type : Type.logOutSuccess
    })
}
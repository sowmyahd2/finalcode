import Type from '../Action/Types';

const intialState = {
    user:{},
    error:"",
    pass:{},
    otp:"",
    data:"sucess"
}

const LoginReducer = (state=intialState, action) => {
    
    switch(action.type){
       
        case Type.loginSuccess:
            return Object.assign({}, state, {
                user: action.payload,
                error:""
            })
            case Type.mobileloginSuccess:
            return Object.assign({}, state, {
                data: "ds",
                error:""
            })
            case Type.changepass:
                return Object.assign({}, state, {
                    pass: action.payload
                })
        case Type.loginFailure:
            return Object.assign({}, state,{
                user:{},
                error:action.payload
            })
            case Type.otpSuccess:
                return Object.assign({}, state,{
                 
                    otp:action.payload
                })
            case Type.logOutSuccess:
                    return intialState
            default:
                return state; 
    } 
}

export default LoginReducer;
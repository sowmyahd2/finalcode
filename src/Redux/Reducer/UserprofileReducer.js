import Type from '../Action/Types';

const intialState = {
    profile: [],
    address:[],
    locality:"",
    addaddress:"",
    psorders: [],
    inactive:"",
    pickorderdetail:"",
    pickupordertails:[],
    homedeliveryorders:[],
    cancelpsorder:"",
    wishlist: [],
    removewishlist:"",
    homedeliveryorderdetail:[],

   
    
  
    
}

const UserprofileReducer = (state=intialState, action) => {
  
    switch(action.type){
        case Type.Userprofile:
            return Object.assign({}, state, {
                profile: action.payload
            })
            case Type.Useraddress:
            
                return Object.assign({}, state, {
                    address: action.payload
                }) 
                case Type.InactiveUseraddress:
            
                    return Object.assign({}, state, {
                        inactive: action.payload
                    }) 
                case Type.Userlocality:
            
                    return Object.assign({}, state, {
                        locality: action.payload
                    }) 
                    
                    case Type.pickupordertailsSuccess:
                        return Object.assign({},state,{
                            pickupordertails:action.payload

                        })
                        case Type.homedeliveryorderSuccess:
                            return Object.assign({},state,{
                                homedeliveryorders:action.payload
    
                            })
                           
                    case Type.psorderSuccess:
                        return Object.assign({}, state, {
                            psorders: action.payload
                        })
                    case Type.addaddress:
            
                        return Object.assign({}, state, {
                            addaddress: action.payload
                        }) 
                        case Type.cancelorderSuccess:
                            return Object.assign({}, state, {
                                cancelpsorder: action.payload
                            }) 
                            case Type.wishlistSuccess:
                                return Object.assign({}, state, {
                                    wishlist: action.payload
                                }) 
                                case Type.removewishlistSuccess :
                                return Object.assign({}, state, {
                                    removewishlist: action.payload
                                }) 
                                case Type.homedeliveryorderdetailSuccess :
                                    return Object.assign({}, state, {
                                        homedeliveryorderdetail: action.payload
                                    })
                                
                                  
            default:
                return state;
    } 
}

export default UserprofileReducer;
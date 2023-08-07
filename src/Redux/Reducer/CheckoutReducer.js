import Type from '../Action/Types';

const intialState = {
    category: [],
    browseByMainCategory:[],
    browseBySubCategory:[],
    homesucess:"",
    picksucess: "",
    receipentid:"",


    
}

const CheckoutReducer = (state=intialState, action) => {
    switch(action.type){
        case Type.CategorySuccess:
            return Object.assign({}, state, {
                category: action.payload
            })
            case Type.browseByMainCategorySuccess:
                return Object.assign({}, state, {
                    browseByMainCategory: action.payload
                })
                case Type.browseBySubCategorySuccess:
                    return Object.assign({}, state, {
                        browseBySubCategory: action.payload
                    })
                    case Type.homecheckoutSuccess:
                        return Object.assign({}, state, {
                            homesucess: action.payload
                        })
            
                        case Type.pickcheckoutSuccess:
                            return Object.assign({}, state, {
                                picksucess: action.payload
                            })
                            case Type.addreceipentSuccess:
                                return Object.assign({}, state, {
                                    receipentid: action.payload
                                })
                    
            default:
                return state;
    } 
}

export default CheckoutReducer;
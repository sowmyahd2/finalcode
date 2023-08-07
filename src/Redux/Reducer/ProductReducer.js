import Type from '../Action/Types';

const intialState = {
    products: [],
    mostView:[],
    productByDepartment:[],
    productBySubcategory:[],
    productByMaincategory:[],
    productByMaincategoryHasMore: true,
    productBySubcategoryHasMore: true,
    productBydepartmentHasMore: true,
    productDetails:{},
    wishlist:{},
}

const ProductReducer = (state=intialState, action) => {
    switch(action.type){
        case Type.productSuccess:
            return Object.assign({}, state, {
                product: action.payload
            })

        case Type.mostViewProductSuccess:
            return Object.assign({}, state,{
                mostView:action.payload
            })

        case Type.productByDepartmentSuccess:
            return Object.assign({}, state,{
                productByDepartment:action.payload
            })
        case Type.productBySubcategorySuccess:
            return {
                ...state,
                productBySubcategory: state.productBySubcategory.concat(action.payload),
                productBySubcategoryHasMore: action.payload.length > 0 ? true : false
            }

        case Type.productByMaincategorySuccess:
            return {
                ...state,
                productByMaincategory: state.productByMaincategory.concat(action.payload),
                productByMaincategoryHasMore: action.payload.length > 0 ? true : false
            }

        case Type.productDetailsSuccess:
            return Object.assign({}, state, {
                productDetails:action.payload
            }) 
            case Type.AddtowishlistSuccess:
                return Object.assign({}, state,{
                    wishlist:action.payload
                })
        case Type.resetProducts: {
            return intialState
        }
    

            default:return state;
    }
}

export default ProductReducer;